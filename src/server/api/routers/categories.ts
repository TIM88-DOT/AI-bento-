import { adminProcedure, createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const categoriesRouter = createTRPCRouter({

    getAllCategories: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.category.findMany();
    }),

});
