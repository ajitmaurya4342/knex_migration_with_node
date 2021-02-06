
exports.up = async function (knex) {


    await knex.schema.createTable("settings", (table) => {
        table.increments("setting_id").primary();
        table.text("app_logo");
        table.text("app_name");
        table.text("base_url_backend");
        table.text("playstore_url");
        table.text("passing_score");//10
        table.text("level_fail_dedution_point");
        table.text("credit_pass_points");
    });

    await knex("settings").insert([{
        "app_logo": "any",
        "app_name": "Quiz",
        "base_url_backend": "https",
        "playstore_url": "https",
        "passing_score": "10",
        "level_fail_dedution_point": "100",
        "credit_pass_points": "50",


    }

    ])
};
exports.down = async function (knex) {
    await knex.schema.dropTable("settings");
};
