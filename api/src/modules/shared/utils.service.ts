import * as bcrypt from 'bcrypt';

export class UtilsService {
    /**
     * generate hash from password or string
     * @param {string} password
     * @returns {string}
     */
    static generateHash(payload: string): string {
        return bcrypt.hashSync(payload, 10);
    }

    /**
     * validate text with hash
     * @param {string} password
     * @param {string} hash
     * @returns {Promise<boolean>}
     */
     static validateHash(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash || '');
    }
}
