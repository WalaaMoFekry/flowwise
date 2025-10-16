import { requierAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requierAuth();
  return <p>Workflows page</p>;
};

export default Page;
