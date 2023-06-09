import { Category } from "@prisma/client";

export default function Categories({ data }: { data: Category }) {
  return (
    <div className="grid w-3/4 m-auto grid-cols-4 gap-4">
      <div className="relative flex h-[120px] w-32 flex-col items-center justify-center overflow-hidden rounded-lg bg-white p-1 hover:shadow m-auto">
        <div className="flex-col flex items-center justify-center h-16 w-16 rounded-lg bg-gray-200"><span>{data.symbol}</span></div>

        <h2 className="mt-2 line-clamp-1 text-sm font-semibold text-gray-800">
          {data?.name}
        </h2>
      </div>
    </div>
  );
}
