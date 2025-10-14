import { RegisterForm } from "@/features/auth/components/register-form";
import { requierUnauth } from "@/lib/auth-utils";

const Page = async () => {
    await requierUnauth();
  
  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default Page;
