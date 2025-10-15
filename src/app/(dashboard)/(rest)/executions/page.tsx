import { requierAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requierAuth();

  return <p>Executions page</p>;
};

export default Page;
