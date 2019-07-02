const logger = require('../src');

logger.config('log.out', 'products-api', 'info', 'production');

logger.info('info example log with params', { foo: 'bar' });
logger.info('info example log without params');

logger.debug('debug example log with params', { foo: 'bar' });
logger.debug('debug example log without params');

logger.error('error example log with params', { foo: 'bar' });
logger.error('error example log without params');

logger.warn('warn example log with params', { foo: 'bar' });
logger.warn('warn example log without params');
