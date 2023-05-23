import { config, DotenvConfigOutput, DotenvParseOutput } from 'dotenv';
import logger from './logger';

let env: DotenvParseOutput;

try {
	const result: DotenvConfigOutput = config();

	if (result.error) {
		throw new Error();
	}

	env = result.parsed as DotenvParseOutput;

	logger.info('Конфигурация .env загружена');
} catch {
	logger.error('Не удалось прочитать файл .env или он отсутствует');
}

export default env;
