import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alan Regis, Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  // Geist via Google Fonts (subset latin, weight 400 + 700)
  const geistRegular = await fetch(
    "https://fonts.gstatic.com/s/geist/v1/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZJhjp-Ek-_EeA.woff2"
  ).then((r) => r.arrayBuffer());

  const geistBold = await fetch(
    "https://fonts.gstatic.com/s/geist/v1/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYAZJhjp-Ek-_EeA.woff2"
  ).then((r) => r.arrayBuffer());

  // Palette — e-ink
  const paper   = "#f0ede6";
  const ink     = "#1a1918";
  const inkDim  = "#7a7872";
  const inkFade = "#c8c5be";
  const green   = "#486040";
  const blue    = "#3a5878";
  const yellow  = "#7a5828";

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: paper,
          display: "flex",
          flexDirection: "column",
          fontFamily: "Geist",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid lines — subtle paper texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(to right, ${inkFade}44 1px, transparent 1px), linear-gradient(to bottom, ${inkFade}44 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Top rule */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: ink, display: "flex" }} />

        {/* Main content — two columns */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "stretch",
            padding: "64px 72px",
            gap: 72,
            position: "relative",
          }}
        >
          {/* Left — identity */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flex: "0 0 420px",
            }}
          >
            {/* Top: site mark */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontWeight: 700, fontSize: 18, color: ink, letterSpacing: "-0.02em" }}>~/</span>
              <span style={{ fontWeight: 400, fontSize: 18, color: inkDim, letterSpacing: "0.01em" }}>alan.dev</span>
            </div>

            {/* Middle: name + role */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: 72,
                    color: ink,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  Alan
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: 72,
                    color: ink,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  Regis
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div style={{ width: 32, height: 2, background: inkDim, display: "flex" }} />
                <span style={{ fontSize: 20, color: inkDim, fontWeight: 400, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Software Developer
                </span>
              </div>
            </div>

            {/* Bottom: location */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 15, color: inkDim, fontWeight: 400 }}>Fortaleza-CE</span>
              <span style={{ color: inkFade, fontSize: 15 }}>·</span>
              <span style={{ fontSize: 15, color: inkDim, fontWeight: 400 }}>remoto ou presencial</span>
            </div>
          </div>

          {/* Vertical divider */}
          <div style={{ width: 1, background: inkFade, alignSelf: "stretch", display: "flex" }} />

          {/* Right — terminal */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
              gap: 0,
            }}
          >
            {/* Terminal titlebar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#e0ddd6",
                borderRadius: "10px 10px 0 0",
                padding: "10px 16px",
                gap: 8,
                border: `1px solid ${inkFade}`,
                borderBottom: "none",
              }}
            >
              <div style={{ display: "flex", gap: 6 }}>
                {["#c8c5be", "#c8c5be", "#c8c5be"].map((c, i) => (
                  <div key={i} style={{ width: 12, height: 12, borderRadius: 6, background: c, display: "flex" }} />
                ))}
              </div>
              <span style={{ fontSize: 13, color: inkDim, flex: 1, textAlign: "center", letterSpacing: "0.01em" }}>
                alan@portifolio
              </span>
            </div>

            {/* Terminal body */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: `1px solid ${inkFade}`,
                borderRadius: "0 0 10px 10px",
                padding: "24px 28px",
                gap: 6,
                background: "#ededea",
              }}
            >
              {/* Prompt */}
              <div style={{ display: "flex", gap: 0, fontSize: 16, letterSpacing: "-0.01em" }}>
                <span style={{ color: green, fontWeight: 700 }}>alan</span>
                <span style={{ color: inkDim }}>@portifolio</span>
                <span style={{ color: inkDim }}>&nbsp;~&nbsp;</span>
                <span style={{ color: blue }}>❯</span>
                <span style={{ color: ink }}>&nbsp;whoami --all</span>
              </div>

              {/* Output: name */}
              <div style={{ display: "flex", fontSize: 15, marginTop: 2 }}>
                <span style={{ color: green, fontWeight: 700 }}>alan</span>
                <span style={{ color: inkDim, fontWeight: 400 }}>&nbsp;regis</span>
              </div>

              {/* Bullets */}
              {[
                { key: "backend dev", rest: "faz frontend mas não admite" },
                { key: "Fortaleza-CE", rest: "remoto ou presencial" },
                { key: "trompetista", rest: "nas horas vagas" },
              ].map((item) => (
                <div key={item.key} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15 }}>
                  <span style={{ color: inkDim, fontSize: 11 }}>▪</span>
                  <span style={{ color: ink, fontWeight: 400 }}>{item.key}</span>
                  <span style={{ color: inkDim }}>·</span>
                  <span style={{ color: inkDim, fontWeight: 400 }}>{item.rest}</span>
                </div>
              ))}

              {/* Empty prompt */}
              <div style={{ display: "flex", gap: 0, fontSize: 16, marginTop: 8 }}>
                <span style={{ color: green, fontWeight: 700 }}>alan</span>
                <span style={{ color: inkDim }}>@portifolio</span>
                <span style={{ color: inkDim }}>&nbsp;~&nbsp;</span>
                <span style={{ color: blue }}>❯</span>
                <span style={{ display: "flex", width: 9, height: 16, background: ink, marginLeft: 6, alignSelf: "center" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: inkFade, display: "flex" }} />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistRegular, weight: 400 },
        { name: "Geist", data: geistBold, weight: 700 },
      ],
    }
  );
}
