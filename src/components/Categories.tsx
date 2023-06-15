import { Category, Tool } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
import { api } from "~/utils/api";

export default function Categories({
  setToolsByCategory,
  data,
}: {
  setToolsByCategory: Dispatch<SetStateAction<Tool[] | undefined>>;
  data: Category;
}) {
  const categoryName = data?.name ?? "";

  const { data: allToolsByCategories } = api.tools.getToolsByCategory.useQuery({
    categoryName,
  });

  const handleClick = () => {
    if (categoryName != "") {
      setToolsByCategory(allToolsByCategories);
    }
  };
  return (
    <div className="m-auto grid w-3/4 grid-cols-4 gap-4">
      <div
        className="relative m-auto flex h-[120px] w-32 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg bg-white p-1 hover:shadow"
        onClick={handleClick}
      >
        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-gray-200">
          <span>{data?.symbol}</span>
        </div>

        <h2 className="mt-2 line-clamp-1 text-sm font-semibold text-gray-800">
          {data?.name}
        </h2>
      </div>
    </div>
  );
}
