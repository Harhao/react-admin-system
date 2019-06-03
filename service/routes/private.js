const User = require("../controller/user.js");
const router = require("koa-router")({
  prefix: "/fruit/api/v1"
});
router.get("/getuserinfo", User.getuserinfo);