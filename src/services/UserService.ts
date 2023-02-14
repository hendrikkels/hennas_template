import { Prisma } from "@prisma/client";
import prisma from "../../lib/prisma";
import { generateJWT } from "@/utils/jwt";

type User = Prisma.usersGetPayload<{}>;
type NewUser = Prisma.usersCreateInput;
type LoginUser = Pick<Prisma.usersCreateInput, "email" | "password">

export const getUser = async (id: number) => {
    try {
        const user = await prisma.users.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
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
}

export const getAllUsers = async () => {
    try {
        const user = await prisma.users.findMany({
            select: {
                id: true,
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
}
