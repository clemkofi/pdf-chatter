import Dashboard from "@/components/Dashboard";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
  // get the current loggedin user
  const { getUser } = getKindeServerSession();
  const user = getUser();

  // Check if user is logged in or not
  if (!user || !user.id) redirect("/auth-callback?origin=dashboard");

  // check if the user has also been synced to the db
  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) redirect("/auth-callback?origin=dashboard");

  return <Dashboard />;
};

export default page;
