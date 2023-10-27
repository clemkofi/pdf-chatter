// import { trpc } from "@/app/_trpc/client";
import { db } from "@/db";
import { PageProps } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound, redirect } from "next/navigation";

const page = async ({ params }: PageProps) => {
  // get the file id
  const { fileid } = params!;

  //   check if the user is logged in
  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user || !user.id) redirect(`/auth-callback?origin=dashboard/${fileid}`);

  //   // get the file details
  //   const { data: file, isLoading } = trpc.getOneUserFile.useQuery({
  //     id: fileid,
  //   }, {
  //     onSuccess: (data) => {
  //         console.log({data});
  //     }
  //   });

  const file = await db.file.findFirst({
    where: {
      id: fileid,
      userId: user.id,
    },
  });

  if (!file) notFound();

  return <div>{fileid}</div>;
};

export default page;
