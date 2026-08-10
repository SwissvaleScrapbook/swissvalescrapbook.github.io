import postgres from 'postgres';
import { Connection } from 'postgrejs';
import sql from './db.js';
import dotenv from 'dotenv';

//import sql from 'db.js'

dotenv.config();
let connection: Connection = new Connection();

function connectToDB() {
    connection = new Connection(process.env.DATABASE_URL);
    connection.connect();
    console.log("printed");
}

function closeConnection(connection: Connection) {
    connection.close();
}

function selectImages() {
    const result = sql`select * from images`.execute();
    // while (result.next()) {
    //     print(set);
    // }
    console.log(result);
    return result;
}


    connectToDB();
    selectImages();
    closeConnection(connection);

// async function selectStories() {
//     const statement = sql` select * from stories`;
//     const set = await statement.execute();
//     while (set.next()) {
//         print(set);
//     }
//     await statement.close();
// }

// async function selectMarkers() {
//     const statement = sql` select * from markers`;
//     const set = await statement.execute();
//     while (set.next()) {
//         print(set);
//     }
//     await statement.close();
// }