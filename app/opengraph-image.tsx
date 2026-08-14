import { ImageResponse } from "next/og";

export const alt = "SouthAsiaExpert - South Asia Expert Witness Services UK";
export const size = { width: 1200, height: 630 };
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
          justifyContent: "flex-end",
          backgroundColor: "#F7F5F0",
          padding: 64,
        }}
      >
        <div
          style={{
            width: 64,
            height: 4,
            backgroundColor: "#7C6C4F",
            marginBottom: 28,
          }}
        />
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#1C2541",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          South Asia Expert Witness
        </div>
        <p
          style={{
            marginTop: 20,
            fontSize: 26,
            fontWeight: 500,
            color: "#3A4250",
            lineHeight: 1.35,
            maxWidth: 800,
          }}
        >
          Country expert evidence for Bangladesh, India, Sri Lanka, Nepal & Bhutan
        </p>
      </div>
    ),
    { ...size }
  );
}
