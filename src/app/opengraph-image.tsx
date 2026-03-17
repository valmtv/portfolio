import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Valerii Matviiv – CS Student & Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Space+Mono:wght@700",
    { headers: { "User-Agent": "Mozilla/5.0" } }
  ).then((r) => r.text());

  const fontUrl = css.match(/src: url\((.+?)\) format/)?.[1];
  const fontBold = await fetch(fontUrl!).then((r) => r.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "0",
          fontFamily: "SpaceMono",
        }}
      >
        {/* Top brutalist black bar */}
        <div
          style={{
            width: "100%",
            height: "16px",
            background: "#000000",
            display: "flex",
          }}
        />

        {/* Main content area */}
        <div
          style={{
            flex: 1,
            display: "flex",
            position: "relative",
            width: "100%",
          }}
        >
          {/* Subtle grid background */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              display: "flex",
            }}
          />

          {/* Text and layout wrapper */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "64px 80px",
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            {/* Top row: VM monogram + URL */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "#ffffff",
                    border: "4px solid #000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "6px 6px 0px #000000",
                  }}
                >
                  <svg
                    viewBox="0 0 32 32"
                    width="40"
                    height="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="2,5 10,5 16,21 16,29" fill="#000000" />
                    <polygon points="22,5 30,5 16,29 16,21" fill="#22c55e" />
                  </svg>
                </div>
                <span
                  style={{
                    color: "#000000",
                    fontSize: "24px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  valmtv.vercel.app
                </span>
              </div>

              {/* Open to opportunities badge */}
              <div
                style={{
                  background: "#22c55e",
                  color: "#000000",
                  border: "4px solid #000000",
                  padding: "12px 24px",
                  fontSize: "20px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  boxShadow: "6px 6px 0px #000000",
                  display: "flex",
                }}
              >
                OPEN TO OPPORTUNITIES
              </div>
            </div>

            {/* Center: Name + subtitle */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
              }}
            >
              <div
                style={{
                  color: "#000000",
                  fontSize: "96px",
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: "-3px",
                }}
              >
                Valerii Matviiv
              </div>
              
              <div
                style={{
                  display: "flex",
                  background: "#22c55e",
                  color: "#000000",
                  padding: "12px 24px",
                  border: "3px solid #000000",
                  fontSize: "36px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  boxShadow: "4px 4px 0px #000000",
                }}
              >
                CS Student & Full-Stack Developer
              </div>
            </div>

            {/* Bottom row: stats */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0",
              }}
            >
              {[
                "AGH Kraków",
                "Erasmus NOVA Lisbon",
                "github.com/valmtv",
              ].map((item, i, arr) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0",
                  }}
                >
                  <span
                    style={{
                      color: "#000000",
                      fontSize: "24px",
                      fontWeight: 700,
                    }}
                  >
                    {item}
                  </span>
                  {i < arr.length - 1 && (
                    <span
                      style={{
                        color: "#000000",
                        opacity: 0.3,
                        fontSize: "24px",
                        margin: "0 20px",
                      }}
                    >
                      /
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom brutalist black bar */}
        <div
          style={{
            width: "100%",
            height: "16px",
            background: "#000000",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "SpaceMono",
          data: fontBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}