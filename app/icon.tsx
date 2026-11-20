import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 15,
          background: "#07070d",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#00f0ff",
          border: "2px solid #00f0ff",
          fontWeight: 800,
          letterSpacing: "-0.05em",
        }}
      >
        MG
      </div>
    ),
    {
      ...size,
    }
  );
}
