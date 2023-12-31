import { FastifyInstance } from 'fastify';
import userController from '../controllers/userController';

const userRoutes = async (app: FastifyInstance) => {
  app.post('/users', userController.createUser);
  app.get('/users/:id', userController.getUser);
  app.patch('/users/:id', userController.updateUser);
  app.delete('/users/:id', userController.deleteUser);
};

export default userRoutes;
