import { LoginForm } from "@/features/auth/components/login-form";
import { requierUnauth } from "@/lib/auth-utils";

const Page = async () => {
  await requierUnauth();

  return <LoginForm />;
};

export default Page;
