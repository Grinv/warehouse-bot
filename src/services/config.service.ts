import { config, DotenvConfigOutput, DotenvParseOutput } from 'dotenv';
import { Logger } from 'winston';

export default class ConfigService {
	#logger: Logger;
	config?: DotenvParseOutput;

	constructor(logger: Logger) {
		this.#logger = logger;

		const result: DotenvConfigOutput = config();

		if (result.error) {
			this.#logger.error('[ConfigService] Не удалось прочитать файл .env или он отсутствует');
		}

		this.config = result.parsed;
		this.#logger.info('[ConfigService] Конфигурация .env загружена');
	}
}
