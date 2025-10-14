import { requierAuth } from "@/lib/auth-utils"
import { caller } from "@/trpc/server";
import { LogoutButton } from "./logout";

const Page = async () => {
  await requierAuth();

  const data = await caller.getUsers();

  return (
    <div className='flex flex-col gap-y-6 items-center justify-center min-w-screen min-h-screen'>
      protected server component
      <div>
      {JSON.stringify(data, null, 2)}
      </div>
      <LogoutButton />
    </div>
  )
}

export default Page