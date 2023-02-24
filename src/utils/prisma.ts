import { PrismaClient } from '@prisma/client'

declare global {
	var prisma: PrismaClient;
}

if (false) {
	prisma = new PrismaClient()
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient()
	}
	prisma = global.prisma
}
export default prisma;
