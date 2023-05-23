import App from './app';
import config from './config';

function bootstrap() {
	const app = new App(config.TELEGRAM_TOKEN);
	app.init();
}

bootstrap();
