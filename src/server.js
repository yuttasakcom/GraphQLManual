const express = require("express");
const expressGraphQL = require("express-graphql");

const app = express();

const schema = require("./schema/schema");

app.set("port", process.env.PORT || "4000");

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(app.get("port"), () => {
  console.log(`Server running at port:${app.get("port")}`);
});
