const index = require('./index');
const createDB = require('./db/createDB')


async function seed() {
    const pool = index.pool
    const client = await pool.connect();

    // build database tables
    await client.query(createDB.stage_types)
    await client.query(createDB.plant_profiles)
    await client.query(createDB.plant_posts);

    client.release()

    await pool.end();

}

seed()
