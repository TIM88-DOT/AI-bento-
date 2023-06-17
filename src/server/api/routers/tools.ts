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
                categories: z.array(
                    z.object({
                        toolId: z.string(),
                        categoryId: z.string(),
                    })
                ),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const newTool = await ctx.prisma.tool.create({
                data: {
                    name: input.name,
                    desc: input.desc,
                    website: input.website,
                    image: input.image,
                    categories: {
                        connect: input.categories.map(category => ({
                            id: category.categoryId
                        }))
                    }
                }
            });
            return newTool;
        }),

    getAllTools: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.tool.findMany();
    }),

    getToolsByCategory: publicProcedure.input(z.object({ categoryName: z.string() })).query(({ ctx, input }) => {
        return ctx.prisma.tool.findMany({
            where: {
                categories: {
                    some: {
                        name: input.categoryName
                    }
                }
            }
        });

    }),

    queryTools: publicProcedure.input(z.object({ query: z.string() })).query(({ ctx, input }) => {
        return ctx.prisma.tool.findMany({
            where: { search: { contains: input.query.toLowerCase() } },
        });

    }),
});
