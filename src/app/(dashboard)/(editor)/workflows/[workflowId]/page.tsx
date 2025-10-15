import { requierAuth } from "@/lib/auth-utils";

interface Props {
    params: Promise<{
        workflowId: string
    }>
}

const Page = async ({ params }: Props) => {
    await requierAuth();
  
    const {workflowId} = await params;
  return (
    <div>Workflow Id:{workflowId}</div>
  )
}

export default Page