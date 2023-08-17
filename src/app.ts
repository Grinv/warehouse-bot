import { Telegraf } from 'telegraf';
import LocalSession from 'telegraf-session-local';
import { Logger } from 'winston';
import RepositoryService from './services/repository.service';

const LOCAL_STORAGE_FILE = 'shop-storage.json';

export default class App {
	#logger;
	#repository;
	#bot;

	constructor(logger: Logger, token: string, repository: RepositoryService) {
		this.#logger = logger;
		this.#repository = repository;
		this.#bot = new Telegraf(token);
		this.#bot.use(new LocalSession({ database: LOCAL_STORAGE_FILE }).middleware());
	}

	async init() {
		this.#bot.start((ctx) => {
			ctx.reply('Welcome');
		});
		this.#bot.launch();
		this.#logger.info('🤖 🚀 bot started');
	}
}
