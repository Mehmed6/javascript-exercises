/**
 * Writes the given string or buffer to the standard output without a newline.
 *
 * @param {string|Buffer} a - The data to write to stdout.
 */
export const write = a => process.stdout.write(a);

/**
 * Writes the given string or buffer to the standard output followed by a newline.
 * If no argument is provided, only a newline is written.
 *
 * @param {string|Buffer} [a] - The data to write to stdout. If undefined, writes a newline.
 */
export const writeLine = a => write(a === undefined ? '\n' : `${a}\n`);