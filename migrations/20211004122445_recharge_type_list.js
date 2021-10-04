
exports.up = async function (knex) {

    await knex.schema.createTable("recharge_type", (table) => {
        table.increments("recharge_type_id").primary();
        table.text("recharge_type_name");
        table.text("recharge_type_is_active");
    });

    let recharge_type_array=[{
        "recharge_type_id":"1",
        "recharge_type_name":"Jio",
        "recharge_type_is_active":"Y"
    },{
           "recharge_type_id":"2",
        "recharge_type_name":"Airtel",
        "recharge_type_is_active":"Y"
    },{
        "recharge_type_id":"3",
        "recharge_type_name":"Vodafone",
        "recharge_type_is_active":"Y"
    },{
        "recharge_type_id":"4",
        "recharge_type_name":"Electricity Bill",
        "recharge_type_is_active":"Y"
    },{
        "recharge_type_id":"5",
        "recharge_type_name":"Money Transfer",
        "recharge_type_is_active":"Y"
    },{
        "recharge_type_id":"6",
        "recharge_type_name":"Redeem Code",
        "recharge_type_is_active":"Y"
    },{
        "recharge_type_id":"7",
        "recharge_type_name":"DTH",
        "recharge_type_is_active":"Y"
    },{
        "recharge_type_id":"8",
        "recharge_type_name":"Recharge App",
        "recharge_type_is_active":"Y"
    },{
        "recharge_type_id":"9",
        "recharge_type_name":"Other",
        "recharge_type_is_active":"Y"
    }]
    await knex("recharge_type").insert(recharge_type_array).then(response => {
        console.log("fsdfdsf", response);
    }).catch(err => {
        console.log("fdsfsdf");
    })

    await knex.schema.createTable("pay_from_app", (table) => {
        table.increments("pay_id").primary();
        table.text("pay_name");
        table.text("pay_is_active");
    });


    let pay_type_array=[{
        "pay_id":"1",
        "pay_name":"Jio App",
        "pay_is_active":"Y"
    },{
           "pay_id":"2",
        "pay_name":"Airtel App",
        "pay_is_active":"Y"
    },{
        "pay_id":"3",
        "pay_name":"Vodafone App",
        "pay_is_active":"Y"
    },{
        "pay_id":"4",
        "pay_name":"Pay In App",
        "pay_is_active":"Y"
    },{
        "pay_id":"5",
        "pay_name":"PayTm",
        "pay_is_active":"Y"
    },{
        "pay_id":"6",
        "pay_name":"Google Pay",
        "pay_is_active":"Y"
    },{
        "pay_id":"7",
        "pay_name":"Phone Pay",
        "pay_is_active":"Y"
    },{
        "pay_id":"8",
        "pay_name":"Pay One App",
        "pay_is_active":"Y"
    },{
        "pay_id":"9",
        "pay_name":"Other",
        "pay_is_active":"Y"
    }]
    
    await knex("pay_from_app").insert(pay_type_array).then(response => {
        console.log("fsdfdsf", response);
    }).catch(err => {
        console.log("fdsfsdf");
    })

    
    await knex.schema.createTable("recharge_history", (table) => {
        table.increments("recharge_history_id").primary();
        table.integer("recharge_app_id").defaultTo(null);
        table.integer("recharge_type").defaultTo(null);
        table.integer("pay_from").defaultTo(null);
        table.integer("recharge_amount").defaultTo(null);
        table.text("description");
        table.text("recharge_is_active");      
        table.integer("created_by").defaultTo();
        table.integer("updated_by").defaultTo();
        table.datetime("created_at").defaultTo(knex.fn.now());
        table.datetime("updated_at").defaultTo(knex.fn.now());
    });
    
};

exports.down = async function (knex) {
    await knex.schema.dropTable("recharge_type");
    await knex.schema.dropTableIfExists("pay_from_app");
    await knex.schema.dropTableIfExists("recharge_history");
};
