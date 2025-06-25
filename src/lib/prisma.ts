import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (typeof window === "undefined") {
	const adapter = new PrismaNeon({
		connectionString: process.env.POSTGRES_PRISMA_URL,
	});

	if (process.env.NODE_ENV === "production") {
		prisma = new PrismaClient({ adapter });
	} else {
		if (!global.prisma) {
			global.prisma = new PrismaClient({adapter});
		}

		prisma = global.prisma;
	}
}

export default prisma;
