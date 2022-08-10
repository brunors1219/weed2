import openDatabase from "../sqlite.js";

async function createPhotosTable() {
    const database = await openDatabase();

    await database.exec(`
        CREATE TABLE photos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            url        text,
            path       text,
            guest      text,
        );
    `)
}

createPhotosTable();