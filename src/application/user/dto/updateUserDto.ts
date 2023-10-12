import { z } from 'zod';

export const UpdateUserDto = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
});

export type UpdateUserDtoType = z.infer<typeof UpdateUserDto>;
