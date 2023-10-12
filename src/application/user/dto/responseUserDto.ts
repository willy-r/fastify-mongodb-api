import { z } from 'zod';

export const ResponseUserDto = z.object({
  name: z.string(),
  email: z.string().email(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ResponseUserDtoType = z.infer<typeof ResponseUserDto>;
