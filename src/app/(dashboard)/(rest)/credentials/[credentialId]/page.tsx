import { requierAuth } from "@/lib/auth-utils";

interface Props {
    params: Promise<{
        credentialId: string
    }>
}

const Page = async ({ params }: Props) => {
    await requierAuth();
  
    const {credentialId} = await params;
  return (
    <div>Credential Id:{credentialId}</div>
  )
}

export default Page