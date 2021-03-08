
exports.up = async function (knex) {

    // table.increments("level_id").primary();
    // table.integer("game_id", 11);
    // table.string("level_name", 45);
    // table.integer("level", 11);
    // table.enu("level_is_active", ["0", "1"]);//l for active 
    // table.integer("created_by").defaultTo();
    // table.integer("updated_by").defaultTo();
    // table.datetime("created_at").defaultTo(knex.fn.now());
    // table.datetime("updated_at").defaultTo(knex.fn.now());
    let arrayGame = []

    for (i = 1; i <= 1; i++) {
        for (j = 51; j <= 68; j++) {
            let obj = {
                game_id: i,
                level: j,
                level_name: "Level" + j,
                level_is_active: "1"
            }
            arrayGame.push(obj)
        }
    }
    // console.log(arrayGame)

    // setTimeout(async () => {
    await knex("m_level").insert(arrayGame).then(response => {
        console.log("fsdfdsf", response);
    }).catch(err => {
        console.log("fdsfsdf");
    })
    // }, 1000)

};

exports.down = async function (knex) {

};
