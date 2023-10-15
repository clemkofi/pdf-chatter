import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
  // authcallback route to check if the user exists in the database
  authCallback: publicProcedure.query(() => {
    const { getUser } = getKindeServerSession();
    const user = getUser();

    if (!user.id || !user.email) throw new TRPCError({ code: "UNAUTHORIZED" });

    // check for whether the current user is synced in our db

    return { success: true };
  }),
});

export type AppRouter = typeof appRouter;
