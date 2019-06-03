const Koa = require("koa");
const app = new Koa();
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const router = require("./routes/index");
const errorHandle = require("./util/error.js");
const koaJwt = require("koa-jwt");
const config = require("./config/index");
const filterApi = require("./config/filterApi");
const util = require("./util/index");
const { connect } = require("./model/init");
onerror(app);
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"]
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
app.use(errorHandle);
app.use(
  koaJwt({
    secret: config.secret,
    isRevoked: util.verify
  }).unless({
    path: [...filterApi]
  })
);
app.use(router.routes(), router.allowedMethods());
(async () => {
  await connect();
})();
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
