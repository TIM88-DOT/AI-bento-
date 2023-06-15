import { Category, Tool } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
import { api } from "~/utils/api";

export default function Categories({
  setToolsByCategory,
  data,
}: {
  setToolsByCategory: Dispatch<SetStateAction<Tool[] | undefined>>;
  data: Category | undefined;
}) {
  const categoryName = data?.name ?? "";

  const { data: allToolsByCategories } = api.tools.getToolsByCategory.useQuery({
    categoryName,
  });

  const { data: allTools } = api.tools.getAllTools.useQuery();

  const handleClick = () => {
    if (categoryName != "All") {
      setToolsByCategory(allToolsByCategories);
    } else setToolsByCategory(allTools);
  };
  return (
    <div
      className="relative m-auto flex h-32 w-32 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg bg-white hover:shadow"
      onClick={handleClick}
    >
      <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-gray-200">
        <span>{data?.symbol}</span>
      </div>

      <h2 className="mt-1 line-clamp-1 text-xs font-semibold text-gray-800">
        {data?.name}
      </h2>
    </div>
  );
}
