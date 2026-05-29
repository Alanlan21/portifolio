import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#1a1a1a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 36,
      }}
    >
      {/* >_ terminal prompt using pure CSS shapes */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        {/* > chevron: rotated square showing two borders */}
        <div
          style={{
            width: 34,
            height: 34,
            borderTop: "7px solid #4ade80",
            borderRight: "7px solid #4ade80",
            transform: "rotate(45deg)",
            marginLeft: 10,
          }}
        />
        {/* _ underscore bar */}
        <div
          style={{
            width: 44,
            height: 7,
            background: "#4ade80",
            marginTop: 32,
          }}
        />
      </div>
    </div>,
    { ...size },
  );
}
