"use client";

import { useEffect, useState } from "react";

interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ApiResponse {
  total: Record<string, number>;
  contributions: Contribution[];
}

// GitHub dark theme palette
const COLORS = {
  0: "#161b22",
  1: "#0e4429",
  2: "#006d32",
  3: "#26a641",
  4: "#39d353",
} as const;

const MONTHS = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
const DAYS = ["", "Seg", "", "Qua", "", "Sex", ""];

export function ContributionGraph({ username }: { username: string }) {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json() as Promise<ApiResponse>;
      })
      .then((data) => {
        setContributions(data.contributions);
        const yearTotal = Object.values(data.total).reduce((a, b) => a + b, 0);
        setTotal(yearTotal);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return (
      <div className="h-28 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full border-2 border-zinc-700 border-t-emerald-500 animate-spin" />
      </div>
    );
  }

  if (error || contributions.length === 0) {
    return null;
  }

  // Build week columns: each column = 7 days (Sun→Sat)
  // Pad the first week so day 0 = Sunday
  const firstDay = new Date(contributions[0].date).getDay();
  const padded: (Contribution | null)[] = [
    ...Array(firstDay).fill(null),
    ...contributions,
  ];

  const weeks: (Contribution | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7));
  }

  // Month labels: find the first week where a new month starts
  const monthLabels: { label: string; col: number }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, col) => {
    const first = week.find((d) => d !== null);
    if (first) {
      const month = new Date(first.date).getMonth();
      if (month !== lastMonth) {
        monthLabels.push({ label: MONTHS[month], col });
        lastMonth = month;
      }
    }
  });

  const CELL = 10; // px per cell
  const GAP = 2;  // px gap
  const step = CELL + GAP;

  const svgWidth = weeks.length * step - GAP;
  const svgHeight = 7 * step - GAP;

  return (
    <div className="w-full overflow-x-auto">
      {/* month labels */}
      <div
        className="relative mb-1 ml-[22px]"
        style={{ height: 14, minWidth: svgWidth }}
      >
        {monthLabels.map(({ label, col }) => (
          <span
            key={`${label}-${col}`}
            className="absolute text-[10px] text-zinc-500 leading-none"
            style={{ left: col * step }}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="flex gap-1">
        {/* day labels */}
        <div className="flex flex-col gap-0 pt-px" style={{ gap: GAP }}>
          {DAYS.map((d, i) => (
            <div
              key={i}
              className="text-[10px] text-zinc-500 leading-none flex items-center"
              style={{ height: CELL }}
            >
              {d}
            </div>
          ))}
        </div>

        {/* grid */}
        <svg
          width={svgWidth}
          height={svgHeight}
          style={{ minWidth: svgWidth }}
          aria-label={`${total} contribuições no último ano`}
        >
          {weeks.map((week, col) =>
            week.map((day, row) => (
              <rect
                key={`${col}-${row}`}
                x={col * step}
                y={row * step}
                width={CELL}
                height={CELL}
                rx={2}
                ry={2}
                fill={day ? COLORS[day.level] : COLORS[0]}
                aria-label={day ? `${day.count} contribuições em ${day.date}` : undefined}
              >
                {day && <title>{`${day.count} contribuições em ${day.date}`}</title>}
              </rect>
            ))
          )}
        </svg>
      </div>

      {/* footer */}
      <div className="flex items-center justify-between mt-2 ml-[22px]">
        <span className="text-[11px] text-zinc-500">
          {total.toLocaleString("pt-BR")} contribuições no último ano
        </span>
        <div className="flex items-center gap-1">
          <span className="text-[10px] text-zinc-600">Menos</span>
          {([0, 1, 2, 3, 4] as const).map((l) => (
            <svg key={l} width={CELL} height={CELL}>
              <rect width={CELL} height={CELL} rx={2} ry={2} fill={COLORS[l]} />
            </svg>
          ))}
          <span className="text-[10px] text-zinc-600">Mais</span>
        </div>
      </div>
    </div>
  );
}
