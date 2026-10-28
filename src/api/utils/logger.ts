/// <reference types="node" />
/**
 * Logger class provides centralized logging
 * with different log levels and API request/response helpers
 */
export class Logger {

  /**
   * Format log message
   * @param level - log level (INFO, WARN, ERROR, DEBUG)
   * @param message - log message
   */
  private static format(level: string, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level}] ${message}`;
  }

  /**
   * Info log
   * @param message - message to log
   */
  static info(message: string): void {
    console.log(this.format('INFO', message));
  }

  /**
   * Warning log
   * @param message - message to log
   */
  static warn(message: string): void {
    console.warn(this.format('WARN', message));
  }

  /**
   * Error log
   * @param message - message to log
   * @param error - optional error object
   */
  static error(message: string, error?: unknown): void {
    console.error(this.format('ERROR', message));
    if (error) {
      console.error(error);
    }
  }

  /**
   * Debug log (enabled if DEBUG=true)
   * @param message - message to log
   */
  static debug(message: string): void {
    if (process.env.DEBUG === 'true') {
      console.debug(this.format('DEBUG', message));
    }
  }

  /**
   * Log an API request
   * @param method - HTTP method
   * @param url - endpoint URL
   * @param body - optional request payload
   */
  static apiRequest(method: string, url: string, body?: object): void {
    this.info(`➡️ ${method.toUpperCase()} ${url}`);
    if (body) {
      console.log('Payload:', JSON.stringify(body, null, 2));
    }
  }

  /**
   * Log an API response
   * @param status - HTTP status code
   * @param response - response body object
   */
  static apiResponse(status: number, response: object): void {
    this.info(`⬅️ Response Status: ${status}`);
    console.log('Response:', JSON.stringify(response, null, 2));
  }
}