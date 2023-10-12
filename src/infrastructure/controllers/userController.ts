import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateUserDto } from '../../application/user/dto/createUserDto';
import { createUser } from '../../application/user/createUser';
import { ZodError } from 'zod';
import { getUser } from '../../application/user/getUser';

const userController = {
  createUser: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const createUserDto = CreateUserDto.parse(request.body);
      const user = await createUser(createUserDto);
      reply.code(201).send(user);
    } catch (error) {
      if (error instanceof ZodError) {
        reply.code(400).send({ error });
        return;
      }
      reply.code(500).send({ error });
    }
  },

  getUser: async (
    request: FastifyRequest<{
      Params: { id: string };
    }>,
    reply: FastifyReply,
  ) => {
    try {
      const user = await getUser(request.params.id);
      reply.code(201).send(user);
    } catch (error) {
      reply.code(500).send({ error: error });
    }
  },

  updateUser: async (request: FastifyRequest, reply: FastifyReply) => {
    const user = await updateUser(request.params.id, request.body);
    reply.code(200).send(user);
  },

  deleteUser: async (request: FastifyRequest, reply: FastifyReply) => {
    await deleteUser(request.params.id);
    reply.code(200).send();
  },
};

export default userController;
