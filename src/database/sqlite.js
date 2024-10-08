import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function openDatabase() {
    return open({
        filename: resolve(__dirname, 'database.db'),
        driver: sqlite3.Database,
    });
}