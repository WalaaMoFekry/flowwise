"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const Page = () => {
  const trpc = useTRPC();
  const googleAI = useMutation(
    trpc.googleAI.mutationOptions({
      onSuccess: () => {
        toast.success("Success");
      },
      onError: ({message}) => {
        toast.error(message);
      },
    })
  );

  return <Button onClick={() => googleAI.mutate()}>Click to subscription</Button>;
};

export default Page;