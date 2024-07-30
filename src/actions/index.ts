import { defineAction, z } from 'astro:actions';

export const server = {
  test: defineAction({
    input: z.object({key: z.string()}),
    async handler(input) {
      await new Promise((res) => setTimeout(res, 3000))
      return input
    }
  })
}