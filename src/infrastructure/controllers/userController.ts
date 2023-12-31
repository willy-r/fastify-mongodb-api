import { FastifyReply, FastifyRequest } from 'fastify';
import { ZodError } from 'zod';

import { CreateUserDto } from '../../application/user/dto/createUserDto';
import { createUser } from '../../application/user/createUser';
import { getUser } from '../../application/user/getUser';
import { updateUser } from '../../application/user/updateUser';
import { UpdateUserDto } from '../../application/user/dto/updateUserDto';
import { deleteUser } from '../../application/user/deleteUser';

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
      reply.code(500).send({ error: error.message });
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
      reply.code(500).send({ error: error.message });
    }
  },

  updateUser: async (
    request: FastifyRequest<{
      Params: { id: string };
    }>,
    reply: FastifyReply,
  ) => {
    try {
      const updateUserDto = UpdateUserDto.parse(request.body);
      const user = await updateUser(request.params.id, updateUserDto);
      reply.code(200).send(user);
    } catch (error) {
      if (error instanceof ZodError) {
        reply.code(400).send({ error });
        return;
      }
      reply.code(500).send({ error: error.message });
    }
  },

  deleteUser: async (
    request: FastifyRequest<{
      Params: { id: string };
    }>,
    reply: FastifyReply,
  ) => {
    try {
      await deleteUser(request.params.id);
      reply.code(204).send();
    } catch (error) {
      reply.code(500).send({ error: error.message });
    }
  },
};

export default userController;
