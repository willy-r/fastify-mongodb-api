import User from '../../domain/user/userModel';
import { UpdateUserDtoType } from './dto/updateUserDto';

export const updateUser = async (
  userId: string,
  updateUserDto: UpdateUserDtoType,
) => {
  try {
    const user = await User.findByIdAndUpdate(userId, updateUserDto, {
      new: true,
    });
    if (!user) {
      throw new Error('User not found');
    }
    return user.toObject();
  } catch (error) {
    throw new Error(`Error updating user: ${error.message}`);
  }
};
