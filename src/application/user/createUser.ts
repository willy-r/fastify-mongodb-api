import User from '../../domain/user/userModel';
import { CreateUserDtoType } from './dto/createUserDto';
import { ResponseUserDto, ResponseUserDtoType } from './dto/responseUserDto';

export const createUser = async (
  createUserDto: CreateUserDtoType,
): Promise<ResponseUserDtoType> => {
  const user = new User(createUserDto);
  const savedUser = await user.save();
  return ResponseUserDto.parse(savedUser.toObject());
};
