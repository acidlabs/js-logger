# JS-LOGGER

js-logger used in Masisa architecture, is a wrapper based on go-logger binary file implemented with golang.

## Methods

### Config method

**config(path, service-name, set-level, environment)**: Method to configure instance used in the library.

#### Params

| Name         | type   | required | default     |
| ------------ | ------ | -------- | ----------- |
| path         | string | yes      |             |
| service-name | string | yes      |             |
| set-level    | string | yes      |             |
| environment  | string | yes      | development |

### Logs methods

**info(message, optional)**: used to register `info` log.

**debug(message, optional)**: used to register `debug` log.

**error(message, optional)**: used to register `error` log.

**warm(message, optional)**: used to register `info` log.

#### Params

| Name     | type   | required |
| -------- | ------ | -------- |
| message  | string | yes      |
| optional | object | yes      |

## Example usage

```js
const logger = require('js-logger');

// config method for configure
logger.config('log.out', 'products-api', 'info', 'production');

logger.info('info example log with params', { foo: 'bar' });
logger.info('info example log without params');

logger.debug('debug example log with params', { foo: 'bar' });
logger.debug('debug example log without params');

logger.error('error example log with params', { foo: 'bar' });
logger.error('error example log without params');

logger.warn('warn example log with params', { foo: 'bar' });
logger.warn('warn example log without params');
```

## Environments

Depending on the value of `environment`, the responses will be different in production or development.

### Production

```json
{
  "foo": "bar",
  "level": "info",
  "msg": "info example log with params",
  "service": "products-api",
  "time": "2019-07-02T17:09:57-04:00"
}
```

### Development

```
time="2019-07-02T17:10:36-04:00" level=info msg="info example log with params" foo=bar service=products-api
```

## Note

Future implementations carried out in different languages ​​will be based on a binary go-logger, respecting the structure defined in the loggeo in the services.
