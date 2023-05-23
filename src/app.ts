import { Telegraf } from 'telegraf';
import logger from './logger';
import LocalSession from 'telegraf-session-local';

export default class App {
	#token: string;
	#bot;

	constructor(token: string) {
		this.#token = token;
		this.#bot = new Telegraf(this.#token);
		this.#bot.use(new LocalSession({ database: 'shop-storage.json' }).middleware());
		return this;
	}

	init() {
		this.#bot.start((ctx) => {
			logger.info(ctx.message.chat.id);
			ctx.reply('Welcome');
		});
		this.#bot.help((ctx) => ctx.reply('Send me a sticker'));
		this.#bot.on('sticker', (ctx) => ctx.reply('👍'));
		this.#bot.hears('hi', (ctx) => ctx.reply('Hey there'));
		this.#bot.launch();
		logger.info('Бот запущен');
	}
}
