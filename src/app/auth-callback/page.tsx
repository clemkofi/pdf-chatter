/* 
This is a page which is called when every someone tries to go the dashboard route 
without logging in or when a user logs in for the very first time
*/

import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";

const page = () => {
  const router = useRouter();

  //   capture all request params to these page
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
    onSuccess: ({ success }) => {
      if (success) {
        // this means the user is synced to db
        router.push(origin ? `/${origin}` : "/dashboard");
      }
    },
  });
};

export default page;
