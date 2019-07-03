const child_process = require('child_process');
const os = require('os');

const BIN_PATH = `${__dirname}/../bin`;

class Logger {
  constructor() {}

  config(path, serviceName, setLevel, environment = 'development') {
    this.serviceName = serviceName;
    this.path = `${path}.${environment}`;
    this.setLevel = setLevel;
    this.environment = environment;
  }

  validateMessage(message) {
    if (typeof message !== 'string') {
      return false;
    }

    return true;
  }

  validateOptional(optional) {
    try {
      const str = JSON.stringify(optional);
      JSON.parse(str);
      return true;
    } catch (err) {
      return false;
    }
  }

  valid(message, optional) {
    if (!this.validateMessage(message)) {
      return false;
    }

    if (!this.validateOptional(optional)) {
      return false;
    }

    return true;
  }

  logger(level, message, optional) {
    if (!this.valid(message, optional)) {
      // TODO: should use `throw new Error`
      console.log('invalid logger');
      return;
    }

    const options = {
      timeout: 3000,
      killSignal: 'SIGKILL',
    };

    //linux or mac
    const platform = os.platform();

    let fileName = 'go-logger-';
    if (platform === 'darwin') {
      fileName += 'darwin';
    } else if (platform === 'linux') {
      fileName += 'linux';
    } else {
      // TODO: should use `throw new Error`
      console.log('invalid SO platform: ', platoform);
      return;
    }

    const optionalStr = JSON.stringify(optional);

    const command = `${BIN_PATH}/${fileName} --message '${message}' --service-name '${this.serviceName}' --path ${
      this.path
    } --set-level '${this.setLevel}' --level '${level}' --optional '${optionalStr}' --environment '${
      this.environment
    }'`;

    try {
      child_process.execSync(command, options);
    } catch (err) {
      console.log('error: ', err);
      return;
    }
  }

  info(message, optional = {}) {
    this.logger('info', message, optional);
  }

  debug(message, optional = {}) {
    this.logger('debug', message, optional);
  }

  error(message, optional = {}) {
    this.logger('error', message, optional);
  }

  warn(message, optional = {}) {
    this.logger('warn', message, optional);
  }
}

module.exports = new Logger();
