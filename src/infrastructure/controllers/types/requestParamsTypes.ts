import { FastifyRequest } from 'fastify';

export type GetUserRequest = FastifyRequest<{
  Params: { id: string };
}>;
