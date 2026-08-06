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
              ? "border-[#C43B2C]/40 bg-[#C43B2C]/5"
              : "border-[#C5D0D8] bg-[#DCE5EA]"
          }`}
        >
          <h2 className="break-words text-lg font-bold text-[#0E2433]">{block.title}</h2>
          <p className="prose-safe mt-3 text-sm text-[#2C3A45] leading-relaxed sm:text-base">{block.content}</p>
        </div>
      ))}
    </div>
  );
}
