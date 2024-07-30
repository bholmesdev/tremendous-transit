import { defineAction, z } from 'astro:actions';

export const server = {
  test: defineAction({
    input: z.object({key: z.string()}),
    async handler(input) {
      await new Promise((res) => setTimeout(res, 300))
      return input
    }
  }),
  logoutUser: defineAction({
    handler: (_, context) => {
      const TOKEN = import.meta.env.TOKEN
  
      try {
        context.cookies.set(TOKEN, '', {
          httpOnly: true,
          maxAge: 0,
          path: '/',
          secure: true,
          sameSite: 'lax',
        })
  
        return { cookieDeleted: true }
      } catch (error) {
        console.error('Error logging out: ', error)
        throw new Error(error.message || error)
      }
    },
  })
}