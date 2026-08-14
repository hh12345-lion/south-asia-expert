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
              ? "border-[#7C6C4F]/40 bg-[#7C6C4F]/5"
              : "border-[#D8D4CC] bg-[#EBE6DC]"
          }`}
        >
          <h2 className="break-words text-lg font-bold text-[#1C2541]">{block.title}</h2>
          <p className="prose-safe mt-3 text-sm text-[#3A4250] leading-relaxed sm:text-base">{block.content}</p>
        </div>
      ))}
    </div>
  );
}
