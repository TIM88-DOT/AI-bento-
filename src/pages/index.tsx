import { type NextPage } from "next";
import Card from "~/components/Card";
import Categories from "~/components/Categories";
import { api } from "~/utils/api";
import { useState, useEffect } from "react";
import { Tool } from "@prisma/client";

const Home: NextPage = () => {
  const { data: allTools } = api.tools.getAllTools.useQuery();

  const [toolsByCategory, setToolsByCategory] = useState<Tool[] | undefined>(
    undefined
  );

  const { data: allCategories } = api.categories.getAllCategories.useQuery();
  console.log("all categories", allCategories);

  useEffect(() => {
    if (toolsByCategory) {
      setToolsByCategory(toolsByCategory);
    }
  }, [toolsByCategory]);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center  bg-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-700 sm:text-[4rem]">
            Welcome to <span className="text-orange-600">AI</span> 🍱
          </h1>
          <h4 className="text-2xl font-extrabold tracking-tight text-gray-700 sm:text-[2rem]">
            your place for the best AI tools
          </h4>
        </div>
        {allCategories &&
          allCategories.map((category) => <Categories setToolsByCategory={setToolsByCategory} data={category} />)}
        {toolsByCategory ? (
          <div className="container flex flex-col items-center justify-center gap-12 px-4 ">
            {toolsByCategory.map((tool) => (
              <Card data={tool} />
            ))}
          </div>
        ) : (
          <div className="container flex flex-col items-center justify-center gap-12 px-4 ">
            {allTools && allTools.map((tool) => <Card data={tool} />)}
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
