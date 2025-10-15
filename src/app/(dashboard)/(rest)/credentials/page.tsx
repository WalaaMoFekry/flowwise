import { requierAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requierAuth();

  return <p>Credentials page</p>;
};

export default Page;
