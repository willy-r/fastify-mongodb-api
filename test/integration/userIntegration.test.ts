import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { CreateUserDtoType } from '../../src/application/user/dto/createUserDto';
import { createUser } from '../../src/application/user/createUser';
import { getUser } from '../../src/application/user/getUser';
import User from '../../src/domain/user/userModel';
import { UpdateUserDtoType } from '../../src/application/user/dto/updateUserDto';
import { updateUser } from '../../src/application/user/updateUser';
import { deleteUser } from '../../src/application/user/deleteUser';

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('User Integration Test', () => {
  describe('createUser()', () => {
    const createUserDto: CreateUserDtoType = {
      email: 'test@test.com',
      name: 'test',
    };

    test('given valid input when calling createUser then it should create user successfully', async () => {
      const user = await createUser(createUserDto);
      expect(user.name).toBe(createUserDto.name);
      expect(user.email).toBe(createUserDto.email);
    });
  });

  describe('getUser()', () => {
    test('when calling getUser then it should return user successfully', async () => {
      const createUserDto: CreateUserDtoType = {
        email: 'test@test.com',
        name: 'test',
      };
      const createdUser = await User.create(createUserDto);
      const user = await getUser(createdUser._id);
      expect(user.email).toBe(createdUser.email);
      expect(user.name).toBe(createdUser.name);
    });

    test.todo(
      'when calling getUser then it should throw generic error for non existing user',
    );
  });

  describe('updateUser()', () => {
    test('given valid input when calling updateUser then it should update user successfully', async () => {
      const createUserDto: CreateUserDtoType = {
        email: 'test@test.com',
        name: 'test',
      };
      const createdUser = await User.create(createUserDto);
      const updateUserDto: UpdateUserDtoType = {
        email: 'test@update.com',
        name: 'test update',
      };
      const user = await updateUser(createdUser._id, updateUserDto);
      expect(user.email).toBe(updateUserDto.email);
      expect(user.name).toBe(updateUserDto.name);
    });

    test('given partial input when calling updateUser then it should only update user name', async () => {
      const createUserDto: CreateUserDtoType = {
        email: 'test@test.com',
        name: 'test',
      };
      const createdUser = await User.create(createUserDto);
      const updateUserDto: UpdateUserDtoType = {
        name: 'test update',
      };
      const user = await updateUser(createdUser._id, updateUserDto);
      expect(user.name).toBe(updateUserDto.name);
      expect(user.email).toBe(createdUser.email);
    });

    test.todo(
      'given valid input when calling updateUser then it should throw generic error for non existing user',
    );
  });

  describe('deleteUser()', () => {
    test('when calling deleteUser then it should delete user successfully', async () => {
      const createUserDto: CreateUserDtoType = {
        email: 'test@test.com',
        name: 'test',
      };
      const createdUser = await User.create(createUserDto);
      await deleteUser(createdUser._id);
      const user = await User.findById(createdUser._id);
      expect(user).toBeNull();
    });

    test.todo(
      'when calling deleteUser then it should throw generic error for non existing user',
    );
  });
});
