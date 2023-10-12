import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateUserDto } from '../../application/user/dto/createUserDto';
import { createUser } from '../../application/user/createUser';
import { ZodError } from 'zod';

const userController = {
  createUser: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const createUserDto = CreateUserDto.parse(request.body);
      const user = await createUser(createUserDto);
      reply.code(201).send(user);
    } catch (err) {
      if (err instanceof ZodError) {
        reply.code(400).send({ error: err });
        return;
      }
      reply.code(500).send({ error: err });
    }
  },

  getUser: async (request: FastifyRequest, reply: FastifyReply) => {
    const user = await getUser(request.params.id);
    reply.code(200).send(user);
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
