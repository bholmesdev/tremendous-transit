import { defineAction, z } from 'astro:actions';

export const server = {
  getUser: defineAction({
    input: z.object({id: z.string()}),
    async handler(input) {
      console.log('handling')
      await new Promise((res) => setTimeout(res, 300))
      return { name: 'Ben', id: input.id }
    }
  }),
  logoutUser: defineAction({
    accept: 'form',
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
        throw error;
      }
    },
  })
}