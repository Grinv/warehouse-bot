import winston, { Logger } from 'winston';

const alignColorsAndTime = winston.format.combine(
	winston.format.colorize({
		all: true,
	}),
	winston.format.label({
		label: '[LOGGER]',
	}),
	winston.format.timestamp({
		format: 'YY-MM-DD HH:mm:ss',
	}),
	winston.format.printf((info) => `${info.label} ${info.timestamp} ${info.level}: ${info.message}`),
);

export default class LoggerService {
	logger: Logger;

	constructor() {
		this.logger = winston.createLogger({
			transports: [
				new winston.transports.Console({
					format: winston.format.combine(winston.format.colorize(), alignColorsAndTime),
				}),
			],
		});
	}
}
