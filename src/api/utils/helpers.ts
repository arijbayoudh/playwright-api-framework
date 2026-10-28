import Ajv, { ErrorObject } from 'ajv';
/**
 * Helpers class provides generic utility functions
 * for tests, API services, or fixtures
 */
export class Helpers {

  /**
   * Generate a unique email
   * @param prefix - optional prefix
   * @returns string - email
   */
  static generateEmail(prefix: string = 'user'): string {
    const timestamp = Date.now();
    return `${prefix}_${timestamp}@test.com`;
  }

  /**
   * Generate a random string
   * @param length - optional length
   * @returns string
   */
  static generateRandomString(length: number = 8): string {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return Array.from({ length }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join('');
  }

  /**
   * Return current date in ISO format
   * @returns string
   */
  static getCurrentDate(): string {
    return new Date().toISOString();
  }

  /**
   * Check if HTTP status is successful (2xx)
   * @param status - HTTP status code
   * @returns boolean
   */
  static isSuccessStatus(status: number): boolean {
    return status >= 200 && status < 300;
  }

  /**
   * Wait for a specified time (ms)
   * Useful for debugging or unstable APIs
   * @param ms - milliseconds
   */
  static async wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Safely parse JSON
   * @param data - JSON string
   * @returns parsed object or null if invalid
   */
  static safeJsonParse<T>(data: string): T | null {
    try {
      return JSON.parse(data) as T;
    } catch {
      return null;
    }
  }

  /**
  * Log detailed AJV validation errors
  */
  static logAjvErrors(errors: ErrorObject[] | null | undefined): void {
    if (!errors || errors.length === 0) return;

    console.error("❌ AJV Validation Errors:");

    errors.forEach((err, index) => {
      const path = err.instancePath || "(root)";
      const message = err.message || "Unknown error";
      let value: any = undefined;

      if (err.params && 'allowedValues' in err.params) {
        value = `(Allowed values: ${err.params.allowedValues})`;
      }

      console.error(`➡️ Error #${index + 1}`);
      console.error(`   • Field   : ${path}`);
      console.error(`   • Message : ${message}`);
      console.error(`   • Value   : ${value}`);
    });
  }
}