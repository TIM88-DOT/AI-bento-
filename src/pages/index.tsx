import { type NextPage } from "next";
import Card from "~/components/Card";
import { Tool } from "~/server/entities/Tool";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data: allTools } = api.tools.getAllTools.useQuery();
  console.log("all tools", allTools);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center  bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[4rem]">
            Welcome to <span className="text-[hsl(280,100%,70%)]">AI</span> 🦪
          </h1>
          <h4 className="text-2xl font-extrabold tracking-tight text-white sm:text-[2rem]">
            your place for the best AI tools
          </h4>
        </div>
        <div className="container flex flex-col items-center justify-center gap-12 px-4 ">
          {allTools && allTools.map((tool) => <Card data={tool} />)}
        </div>
      </main>
    </>
  );
};

export default Home;
