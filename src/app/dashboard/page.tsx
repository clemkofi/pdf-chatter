import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const page = () => {
  // get the current loggedin user
  const { getUser } = getKindeServerSession();
  const user = getUser();

  // Check if user is logged in or not
  if (!user || !user.id) redirect("/auth-callback?origin=dashboard");

  return <div>{user.email}</div>;
};

export default page;
