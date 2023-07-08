import { PrismaClient } from '@prisma/client';
import { Logger } from 'winston';

export class DatabaseService {
	#logger;
	client: PrismaClient;

	constructor(logger: Logger) {
		this.#logger = logger;
		this.client = new PrismaClient();
	}

	async connect(): Promise<void> {
		try {
			await this.client.$connect();
			this.#logger.info('[DatabaseService] Успешно подключились к базе данных');
		} catch (e) {
			if (e instanceof Error) {
				this.#logger.error('[DatabaseService] Ошибка подключения к базе данных: ' + e.message);
			}
		}
	}

	async disconnect(): Promise<void> {
		await this.client.$disconnect();
	}
}
