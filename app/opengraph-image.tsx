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
          backgroundColor: "#0E2433",
          padding: 64,
          backgroundImage:
            "linear-gradient(135deg, #0E2433 0%, #0E2433 55%, #1F6B5C 100%)",
        }}
      >
        <div
          style={{
            width: 64,
            height: 4,
            backgroundColor: "#C43B2C",
            marginBottom: 28,
          }}
        />
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          SouthAsiaExpert
        </div>
        <p
          style={{
            marginTop: 20,
            fontSize: 28,
            fontWeight: 500,
            color: "#DCE5EA",
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
