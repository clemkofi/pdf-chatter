"use client";

/* 
This is a page which is called when every someone tries to go the dashboard route 
without logging in or when a user logs in for the very first time
*/

import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
import { Loader2 } from "lucide-react";

const page = () => {
  const router = useRouter();

  //   capture all request params to these page
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
    onSuccess: ({ success }) => {
      console.log("here");
      if (success) {
        // this means the user is synced to db
        router.push(origin ? `/${origin}` : "/dashboard");
      }
    },
    onError: (err) => {
      console.log("here1");
      if (
        err.data?.code === "UNAUTHORIZED" ||
        err.data?.code === "INTERNAL_SERVER_ERROR"
      ) {
        console.log("here2");
        router.push("/sign-in");
      }
    },
    retry: (data) => {
      console.log(data);
      return true;
    },
    retryDelay: 20000,
  });

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="font-semibold text-xl">Setting up your account...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  );
};

export default page;
