import { Prisma } from "@prisma/client";

export type User = Omit<Prisma.usersGetPayload<{}>, 'password'>;
// export type NewUser = Prisma.usersCreateInput;
// export type LoginUser = Pick<Prisma.usersCreateInput, "email" | "password">;