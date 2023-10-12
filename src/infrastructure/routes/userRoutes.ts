import { FastifyInstance } from 'fastify';
import userController from '../controllers/userController';

const userRoutes = (app: FastifyInstance) => {
  app.post('/users', userController.createUser);
  app.get('/users/:id', userController.getUser);
  app.put('/users/:id', userController.updateUser);
  app.delete('/users/:id', userController.deleteUser);
};

export default userRoutes;
