import { FastifyReply, FastifyRequest } from 'fastify';

const userController = {
  createUser: async (request: FastifyRequest, reply: FastifyReply) => {
    const user = await createUser(request.body);
    reply.code(201).send(user);
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
