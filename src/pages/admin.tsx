import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import Form from "~/components/Form";

const Admin: NextPage = () => {
  const { data: sessionData } = useSession();

  const { data: allCategories } =
    api.categories.getAllCategories.useQuery(undefined);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white/80">
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            className="rounded-full bg-black/5 px-10 py-3 font-semibold text-black no-underline transition hover:bg-black/20"
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >
            {sessionData ? "Sign out" : "Sign in"}
          </button>
        </div>
        {sessionData && (
          <>
            <p className="text-center text-2xl text-black">
              <span>Logged in as {sessionData.user?.name}</span>
            </p>
            <Form allCategories={allCategories}/>
          </>
        )}
      </main>
    </>
  );
};


export default Admin;
