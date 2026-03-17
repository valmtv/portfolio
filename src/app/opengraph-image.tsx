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
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "0",
          fontFamily: "GeistMono",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top green bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#22c55e",
            display: "flex",
          }}
        />

        {/* Subtle grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(34,197,94,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            display: "flex",
          }}
        />

        {/* Main content wrapper */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 80px 64px",
            height: "100%",
            position: "relative",
          }}
        >
          {/* Top row: VM monogram + tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* VM logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  background: "#000",
                  border: "2px solid #22c55e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "4px 4px 0px #22c55e",
                }}
              >
                <svg
                  viewBox="0 0 32 32"
                  width="36"
                  height="36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    points="2,5 10,5 16,21 16,29"
                    fill="#22c55e"
                  />
                  <polygon
                    points="22,5 30,5 16,29 16,21"
                    fill="#ffffff"
                  />
                </svg>
              </div>
              <span
                style={{
                  color: "#888888",
                  fontSize: "18px",
                  fontWeight: 400,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                }}
              >
                portfolio-pi-navy-43.vercel.app
              </span>
            </div>

            {/* Open to opportunities badge */}
            <div
              style={{
                background: "#22c55e",
                color: "#000000",
                padding: "10px 24px",
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "1px",
                boxShadow: "4px 4px 0px #ffffff",
                display: "flex",
              }}
            >
              OPEN TO OPPORTUNITIES
            </div>
          </div>

          {/* Center: Name + title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              style={{
                color: "#ffffff",
                fontSize: "88px",
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "-2px",
              }}
            >
              Valerii Matviiv
            </div>
            <div
              style={{
                color: "#22c55e",
                fontSize: "32px",
                fontWeight: 700,
                letterSpacing: "1px",
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
              "Erasmus @ NOVA Lisbon",
              "GPA 4.73 · Rector's Scholar",
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
                    color: "#aaaaaa",
                    fontSize: "20px",
                    fontWeight: 400,
                  }}
                >
                  {item}
                </span>
                {i < arr.length - 1 && (
                  <span
                    style={{
                      color: "#555555",
                      fontSize: "20px",
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

        {/* Bottom green bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#22c55e",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "GeistMono",
          data: fontBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}