import { caller } from '@/trpc/server';
import React from 'react'

const Page = async () => {
  const user = await caller.getUsers();
  return (
    <div className='flex items-center justify-center min-w-screen min-h-screen'>
      {JSON.stringify(user)}
    </div>
  )
}

export default Page