import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const portrait = await readFile(join(process.cwd(), "public/images/bagus.png"));
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        {/* ImageResponse renders this image directly into the favicon. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/png;base64,${portrait.toString("base64")}`}
          alt=""
          width={64}
          height={64}
          style={{ objectFit: "cover", borderRadius: "50%" }}
        />
      </div>
    ),
    size,
  );
}
