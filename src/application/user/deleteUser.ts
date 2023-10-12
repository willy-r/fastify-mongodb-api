import User from '../../domain/user/userModel';

export const deleteUser = async (userId: string) => {
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw new Error('User not found');
    }
  } catch (error) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
};
