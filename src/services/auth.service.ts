import { Prisma } from "@prisma/client";
import prisma from "../../lib/prisma";
import { generateJWT } from "@/utils/jwt";
import { RegisterUser, LoginUser } from "@/types";
import { hashPassword } from "@/utils/password";

function exclude<User, Key extends keyof User>(
    user: User,
    keys: Key[]
): Omit<User, Key> {
    for (let key of keys) {
        delete user[key];
    }
    return user;
}

export const getUserById = async (id: number) => {
    try {
        const user = await prisma.users.findUnique({
            where: {
                id: id,
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
        });
        return user;
    } catch (e) {
        console.log(`Error: ${e}`);
        throw e;
    }
};

export const getUserByEmail = async (email: string) => {
    try {
        const user = await prisma.users.findUnique({
            where: {
                email: email,
            },
        });
        return user;
    } catch (e) {
        console.log(`Error: ${e}`);
        throw e;
    }
};

export const register = async (registerUser: RegisterUser) => {
    const hashedPassword = await hashPassword(registerUser.password);
    registerUser.password = hashedPassword;
    console.log(registerUser);
    try {
        const user = await prisma.users.create({ data: registerUser });
        return exclude(user, ['password']);
    } catch (e) {
        console.log(`Error: ${e}`);
        throw (e);
    }
};

export const login = async (user: LoginUser) => {
    try {
        const token = generateJWT({ userId: user.id, userRole: user.role });
        return user;
    } catch (e) {
        console.log(`Error: ${e}`);
        throw (e);
    }
};
