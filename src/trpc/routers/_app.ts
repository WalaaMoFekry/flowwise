import { inngest } from '@/inngest/client';
import { createTRPCRouter, protectedProcedure } from '../init';
import prisma from '@/lib/db';

export const appRouter = createTRPCRouter({
    googleAI: protectedProcedure.mutation(async () => {
        await inngest.send({
            name: "execute/ai"
        })
        return { success: true, message: "Jop is done" }
    }),
    
    getWorkflows: protectedProcedure.query(({ ctx }) => {
        return prisma.workflow.findMany();
    }),

    createWorkFlow: protectedProcedure.mutation(async () => {
        await inngest.send({
            name: "test/hello.world",
            data: {
                email: "walaa@gmail.com",
            },
        });
        return { success: true, message: "Jop is done" }
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;