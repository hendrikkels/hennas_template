import prisma from "@/utils/prisma";
import { RegisterUser } from "@/types";

function exclude<User, Key extends keyof User>(
    user: User,
    keys: Key[]
): Omit<User, Key> {
    for (let key of keys) {
        delete user[key];
    }
    return user;
}

export const getUser = async (id: number) => {
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

export const getUserById = async (id: number) => {
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

export const getUserByUsername = async (username: string) => {
    try {
        const user = await prisma.users.findUnique({
            where: {
                username: username,
            },
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
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

export const getUserByEmail = async (username: string) => {
    try {
        const user = await prisma.users.findUnique({
            where: {
                username: username,
            },
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
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

export const getAllUsers = async () => {
    try {
        const user = await prisma.users.findMany({
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
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

export const createUser = async (registerUser: RegisterUser) => {
    try {
        const user = await prisma.users.create({ data: { ...registerUser } });
        return exclude(user, ['password']);
    } catch (e) {
        console.log(`Error: ${e}`);
        throw (e);
    }
};
