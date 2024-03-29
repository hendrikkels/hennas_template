import prisma from "@/utils/prisma";
import { UpdateProfile } from "@/types/profile";

export const getUserProfile = async (id: number) => {
  try {
    const user = await prisma.users.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        profile: true,
        updatedAt: true,
        createdAt: true,
      },
    });
    return user;
  } catch (e) {
    console.log(`Error: ${e}`);
    throw e;
  }
};

export const createUserProfile = async (userId: number) => {
  try {
    const userProfile = await prisma.profiles.create({
      data: {
        name: '',
        surname: '',
        bio: '',
        user: {
          connect: {
            id: userId,
          },
        },
      }
    });
    return userProfile;
  } catch (e) {
    console.log(`Error: ${e}`);
    throw e;
  }
};

export const updateUserProfile = async (profileId: number, data: UpdateProfile) => {
  try {
    const userProfile = await prisma.profiles.update({
      where: {
        id: profileId,
      },
      data: {
        ...data
      },
    });
    return userProfile;
  } catch (e) {
    console.log(`Error: ${e}`);
    throw e;
  }
};