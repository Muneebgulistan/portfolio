import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Muneeb Gulistan — Web Developer & AI Learner";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#07070d",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(0, 240, 255, 0.18), transparent 45%), radial-gradient(circle at 85% 20%, rgba(139, 92, 255, 0.22), transparent 50%)",
          color: "#e8eaf6",
          padding: "64px 72px",
          border: "2px solid #242438",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                padding: "8px 16px",
                border: "2px solid #00f0ff",
                color: "#00f0ff",
                fontSize: "24px",
                fontWeight: 800,
              }}
            >
              {"<MG/>"}
            </div>
            <div
              style={{
                color: "#39ff88",
                fontSize: "18px",
                letterSpacing: "0.2em",
                fontWeight: 700,
              }}
            >
              {"// PLAYER ONE · AVAILABLE FOR NEW PROJECTS"}
            </div>
          </div>

          <div
            style={{
              padding: "6px 16px",
              border: "1px solid #ff2bd6",
              color: "#ff2bd6",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "0.15em",
            }}
          >
            LVL 2 · BS AI
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontSize: "88px",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "#e8eaf6",
            }}
          >
            MUNEEB
          </div>
          <div
            style={{
              fontSize: "88px",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "#00f0ff",
            }}
          >
            GULISTAN
          </div>
          <div
            style={{
              marginTop: "16px",
              fontSize: "28px",
              color: "#8b8fa8",
              maxWidth: "850px",
            }}
          >
            Web Developer · AI Learner · Next.js & React Builder · Founding Member @ ARMAAS & Feedify
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #242438",
            paddingTop: "24px",
            fontSize: "20px",
            color: "#00f0ff",
            letterSpacing: "0.14em",
          }}
        >
          <div>NEXT.JS ◆ REACT ◆ TAILWIND ◆ PYTHON ◆ C++ ◆ CLAUDE API</div>
          <div style={{ color: "#39ff88" }}>● ONLINE</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
