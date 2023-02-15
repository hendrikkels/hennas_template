import { Prisma } from "@prisma/client";

export type RegisterUser = Prisma.usersCreateInput;
export type LoginUser = Prisma.usersGetPayload<{}>;