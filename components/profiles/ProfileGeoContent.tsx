import type { ProfileGeoBlock } from "@/data/profile-geo";

export function ProfileGeoContent({ blocks }: { blocks: ProfileGeoBlock[] }) {
  if (blocks.length === 0) return null;

  return (
    <div className="my-8 space-y-6">
      {blocks.map((block) => (
        <div
          key={block.title}
          className={`rounded-none border p-6 ${
            block.type === "highlight"
              ? "border-[#716148]/40 bg-[#716148]/5"
              : "border-[#D4CDC2] bg-[#E8E2D8]"
          }`}
        >
          <h2 className="break-words text-lg font-bold text-[#1A2138]">{block.title}</h2>
          <p className="prose-safe mt-3 text-sm text-[#3A4250] leading-relaxed sm:text-base">{block.content}</p>
        </div>
      ))}
    </div>
  );
}
