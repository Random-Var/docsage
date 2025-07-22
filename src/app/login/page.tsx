import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/lib/auth";
import LoginForm from "@/components/LoginForm";

export default async function loginPage() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect("/chat");
  }

  return (
    <LoginForm />
  );
}
