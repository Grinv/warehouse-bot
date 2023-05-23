import App from './app';
import ConfigService from './services/config.service';
import { DatabaseService } from './services/database.service';
import LoggerService from './services/logger.service';
import RepositoryService from './services/repository.service';

async function bootstrap() {
	const { logger } = new LoggerService();
	const { config } = new ConfigService(logger);
	const database = new DatabaseService(logger);
	await database.connect();
	const repository = new RepositoryService(database.client);

	if (config) {
		const app = new App(logger, config.TELEGRAM_TOKEN, repository);
		app.init();
	}
}

bootstrap();
