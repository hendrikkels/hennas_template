import { Prisma } from "@prisma/client";
import prisma from "../../lib/prisma";
import { generateJWT } from "@/utils/jwt";

type NewUser = Prisma.usersCreateInput;
type AuthUser = Prisma.usersGetPayload<{ select: { id: true, email: true, password: true, role: true } }>;

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
}

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
}

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
}

export const register = async (newUser: NewUser) => {
    try {
        const user = await prisma.users.create({ data: newUser });
        return user;
    } catch (e) {
        console.log(`Error: ${e}`);
        throw (e);
    }
}

export const login = async (user: AuthUser) => {
    try {
        const token = generateJWT({ userId: user.id, userRole: user.role });
        return user;
    } catch (e) {
        console.log(`Error: ${e}`);
        throw (e);
    }
}
