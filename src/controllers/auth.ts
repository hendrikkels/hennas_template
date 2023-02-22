import prisma from "../../lib/prisma";

export const loginUserByEmail = async (email: string) => {
    try {
        const user = await prisma.users.findUnique({
            where: {
                email: email,
            },
            select: {
                id: true,
                password: true,
            },
        });
        return user;
    } catch (e) {
        console.log(`Error: ${e}`);
        throw e;
    }
};


