import User from '../../domain/user/userModel';

export const getUser = async (userId: string) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user.toObject();
  } catch (error) {
    throw new Error(`Error getting user: ${error.message}`);
  }
};
