import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export async function requireUser() {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/login");
  }

  return session;
}
