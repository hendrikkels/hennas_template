import { Prisma } from "@prisma/client";

export type UpdateProfile = Prisma.profilesUpdateInput;
export type Profile = Prisma.profilesGetPayload<{}>;
