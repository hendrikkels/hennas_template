import { Prisma } from "@prisma/client";
import prisma from "../../lib/prisma";
import { generateJWT } from "@/utils/jwt";

type User = Prisma.userGetPayload<{}>;
type NewUser = Prisma.userCreateInput;
type LoginUser = Pick<Prisma.userCreateInput, "email" | "password">


export const getUserById = async (id: number) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
        });
        return user;
    } catch (e) {
        console.log(`Error: ${e}`);
        throw e;
    }
}

export const getUserByEmail = async (email: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            }
        });
        return user;
    } catch (e) {
        console.log(`Error: ${e}`);
        throw e;
    }
}

export const getUserByUsername = async (username: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                username: username,
            }
        });
        return user;
    } catch (e) {
        console.log(`Error: ${e}`);
        throw e;
    }
}

export const getAllUsers = async () => {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (e) {
        console.log(`Error: ${e}`);
        throw (e);
    }
}

export const register = async (newUser: NewUser) => {
    try {
        const user = await prisma.user.create({ data: newUser });
        return user;
    } catch (e) {
        console.log(`Error: ${e}`);
        throw (e);
    }
}

export const login = async (user: User) => {
    try {
        const token = generateJWT({ userId: user.id, userRole: user.role });
        return user;
    } catch (e) {
        console.log(`Error: ${e}`);
        throw (e);
    }
}
