import { requierAuth } from "@/lib/auth-utils";

interface Props {
    params: Promise<{
        executionId: string
    }>
}

const Page = async ({ params }: Props) => {
    await requierAuth();
  
    const {executionId} = await params;
  return (
    <div>Execution Id:{executionId}</div>
  )
}

export default Page