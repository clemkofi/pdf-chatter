/* 
This is a page which is called when every someone tries to go the dashboard route 
without logging in or when a user logs in for the very first time
*/

import { useRouter, useSearchParams } from "next/navigation";

const page = () => {
  const router = useRouter();

  //   capture all request params to these page
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");
};

export default page;
