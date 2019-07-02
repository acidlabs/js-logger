const logger = require('../src');

/*
 *
 *  config*/
logger.config('log.out', 'products-api', 'info', 'development');

// info log
logger.info('info example log with params', { foo: 'bar' });
logger.info('info example log without params');

// debug log
logger.debug('debug example log with params', { foo: 'bar' });
logger.debug('debug example log without params');

// error log
logger.error('error example log with params', { foo: 'bar' });
logger.error('error example log without params');

// warn log
logger.warn('warn example log with params', { foo: 'bar' });
logger.warn('warn example log without params');
