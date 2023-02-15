import { Prisma } from "@prisma/client";

type User = Omit<Prisma.usersGetPayload<{}>, 'password'>;
type NewUser = Prisma.usersCreateInput;
type LoginUser = Pick<Prisma.usersCreateInput, "email" | "password">;