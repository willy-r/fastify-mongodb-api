import User from '../../domain/user/userModel';
import { CreateUserDtoType } from './dto/createUserDto';

export const createUser = async (createUserDto: CreateUserDtoType) => {
  try {
    const user = new User(createUserDto);
    await user.save();
    return user.toObject();
  } catch (error) {
    throw new Error(`Error creating user: ${error}`);
  }
};
