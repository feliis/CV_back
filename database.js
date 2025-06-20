const sqlite3 = require('sqlite3').verbose();

async function getPersonInfo() {
    const db = new sqlite3.Database('cv.db');
    
    try {
        const row = await new Promise((resolve, reject) => {
            db.get('SELECT * FROM Person', [], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });
        
        return row ?? {};
    } finally {
        db.close();
    }
}

module.exports = { getPersonInfo };