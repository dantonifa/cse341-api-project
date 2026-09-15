const routes = require("express").Router();
const temple = require("./temple");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

routes.use("/temples", temple);

// Route to serve the interactive Swagger graphical UI documentation
routes.use("/api-docs", swaggerUi.serve);
routes.get("/api-docs", swaggerUi.setup(swaggerDocument));

routes.use(
  "/",
  (docData = (req, res) => {
    let docData = {
      documentationURL: "https://github.io",
    };
    res.send(docData);
  }),
);

module.exports = routes;
