let loginRoutes = require("@/routes/loginRoute.js")
module.exports = (app) => {
    app.use("/admin", loginRoutes);
    // app.get("/", async (req, res) => {

    //     let knexQuery = await knex("acos").paginate(pagination(10, 1));
    //     res.send(knexQuery)

    // });


};
