import {z} from 'zod'


export const signUpInput =z.object({
    email:z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
  })

  export const signInInput =z.object({
    email:z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
  })

  export const createPostInput = z.object({
    title:z.string(),
    content:z.string()
  })

  export const updatePostInput = z.object({
    id: z.string().optional(),
    title:z.string(),
    content:z.string()
  })

  export type SingUpInput = z.infer<typeof signUpInput>


  export type SingInInput = z.infer<typeof signInInput>

  export type CreatePostInput = z.infer<typeof createPostInput>

  export type UpdatePostInput = z.infer<typeof updatePostInput>