"use client";
import { useTRPC } from "@/trpc/client";
import { LogoutButton } from "./logout";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Page = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const googleAI = useMutation(trpc.googleAI.mutationOptions({
    onSuccess: () => {
        toast.success("AI Google Jop is done");
      },
    }
  ));

  const create = useMutation(
    trpc.createWorkFlow.mutationOptions({
      onSuccess: () => {
        toast.success("Jop is done");
      },
    })
  );

  return (
    <div className="flex flex-col gap-y-6 items-center justify-center min-w-screen min-h-screen">
      protected server component
      <div>{JSON.stringify(data, null, 2)}</div>
      <Button onClick={() => create.mutate()} disabled={create.isPending}>
        Create Workflow
      </Button>
      <Button onClick={() => googleAI.mutate()} disabled={googleAI.isPending}>
        Create AI
      </Button>
      <LogoutButton />
    </div>
  );
};

export default Page;
