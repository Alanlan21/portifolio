import { ImageResponse } from "next/og";

export const alt = "Alan Regis, Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  // Palette — e-ink
  const paper = "#f0ede6";
  const ink = "#1a1918";
  const inkDim = "#7a7872";
  const inkFade = "#c8c5be";
  const green = "#486040";
  const blue = "#3a5878";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: paper,
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Top rule */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: 4,
            background: ink,
          }}
        />

        {/* Main content — two columns */}
        <div
          style={{
            display: "flex",
            flex: 1,
            padding: "64px 72px",
          }}
        >
          {/* Left — identity */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: 460,
              marginRight: 56,
            }}
          >
            {/* Top: site mark */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: 20,
                  color: ink,
                  letterSpacing: "-0.02em",
                }}
              >
                ~/
              </span>
              <span
                style={{
                  fontWeight: 400,
                  fontSize: 20,
                  color: inkDim,
                  marginLeft: 4,
                }}
              >
                alan.dev
              </span>
            </div>

            {/* Middle: name + role */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  fontWeight: 700,
                  fontSize: 88,
                  color: ink,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                Alan
              </div>
              <div
                style={{
                  display: "flex",
                  fontWeight: 700,
                  fontSize: 88,
                  color: ink,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  marginTop: 8,
                }}
              >
                Regis
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 24,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: 36,
                    height: 2,
                    background: inkDim,
                    marginRight: 14,
                  }}
                />
                <span
                  style={{
                    fontSize: 22,
                    color: inkDim,
                    fontWeight: 400,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Software Developer
                </span>
              </div>
            </div>

            {/* Bottom: location */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: 16, color: inkDim, fontWeight: 400 }}>
                Fortaleza-CE
              </span>
              <span style={{ color: inkFade, fontSize: 16, margin: "0 10px" }}>
                ·
              </span>
              <span style={{ fontSize: 16, color: inkDim, fontWeight: 400 }}>
                remoto ou presencial
              </span>
            </div>
          </div>

          {/* Right — terminal */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
            }}
          >
            {/* Terminal titlebar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#e0ddd6",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                padding: "12px 18px",
                borderTop: `1px solid ${inkFade}`,
                borderLeft: `1px solid ${inkFade}`,
                borderRight: `1px solid ${inkFade}`,
              }}
            >
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    background: inkFade,
                    marginRight: 8,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    background: inkFade,
                    marginRight: 8,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    background: inkFade,
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 14, color: inkDim }}>
                  alan@portifolio
                </span>
              </div>
            </div>

            {/* Terminal body */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#ededea",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                padding: "28px 32px",
                borderBottom: `1px solid ${inkFade}`,
                borderLeft: `1px solid ${inkFade}`,
                borderRight: `1px solid ${inkFade}`,
              }}
            >
              {/* Prompt */}
              <div
                style={{
                  display: "flex",
                  fontSize: 17,
                  marginBottom: 10,
                }}
              >
                <span style={{ color: green, fontWeight: 700 }}>alan</span>
                <span style={{ color: inkDim }}>@portifolio</span>
                <span style={{ color: inkDim, margin: "0 6px" }}>~</span>
                <span style={{ color: blue, fontWeight: 700 }}>{">"}</span>
                <span style={{ color: ink, marginLeft: 8 }}>whoami --all</span>
              </div>

              {/* Output: name */}
              <div style={{ display: "flex", fontSize: 17, marginBottom: 14 }}>
                <span style={{ color: green, fontWeight: 700 }}>alan</span>
                <span style={{ color: inkDim, marginLeft: 6 }}>regis</span>
              </div>

              {/* Bullets */}
              <div style={{ display: "flex", alignItems: "center", fontSize: 16, marginBottom: 6 }}>
                <span style={{ color: inkDim, marginRight: 10, fontSize: 10 }}>▪</span>
                <span style={{ color: ink }}>backend dev</span>
                <span style={{ color: inkDim, margin: "0 8px" }}>·</span>
                <span style={{ color: inkDim }}>faz frontend mas não admite</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", fontSize: 16, marginBottom: 6 }}>
                <span style={{ color: inkDim, marginRight: 10, fontSize: 10 }}>▪</span>
                <span style={{ color: ink }}>Fortaleza-CE</span>
                <span style={{ color: inkDim, margin: "0 8px" }}>·</span>
                <span style={{ color: inkDim }}>remoto ou presencial</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", fontSize: 16 }}>
                <span style={{ color: inkDim, marginRight: 10, fontSize: 10 }}>▪</span>
                <span style={{ color: ink }}>trompetista</span>
                <span style={{ color: inkDim, margin: "0 8px" }}>·</span>
                <span style={{ color: inkDim }}>nas horas vagas</span>
              </div>

              {/* Empty prompt + cursor */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 17,
                  marginTop: 16,
                }}
              >
                <span style={{ color: green, fontWeight: 700 }}>alan</span>
                <span style={{ color: inkDim }}>@portifolio</span>
                <span style={{ color: inkDim, margin: "0 6px" }}>~</span>
                <span style={{ color: blue, fontWeight: 700 }}>{">"}</span>
                <div
                  style={{
                    display: "flex",
                    width: 10,
                    height: 18,
                    background: ink,
                    marginLeft: 8,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: 2,
            background: inkFade,
          }}
        />
      </div>
    ),
    size,
  );
}
