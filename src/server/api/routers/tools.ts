import { z } from "zod";
import { adminProcedure, createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const toolsRouter = createTRPCRouter({
    addNewTool: adminProcedure
        .input(
            z.object({
                name: z.string(),
                desc: z.string(),
                website: z.string(),
                image: z.string(),
                category: z.string(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const newTool = await ctx.prisma.tool.create({
                data: {
                    name: input.name,
                    desc: input.desc,
                    website: input.website,
                    image: input.image,
                    category: {
                        connectOrCreate: {
                            where: { name: input.category },
                            create: { name: input.category },
                        },
                    },
                },
            });
            return newTool;
        }),

    getAllCategories: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.category.findMany();
    }),
});
