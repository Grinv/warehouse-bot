import { PrismaClient } from '@prisma/client';

export default class RepositoryService {
	#database;

	constructor(database: PrismaClient) {
		this.#database = database;
	}

	getAllProducts() {
		return this.#database.productModel.findMany();
	}
}
