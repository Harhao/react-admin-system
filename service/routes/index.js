const User = require("../controller/user.js");
const router = require("koa-router")({
  prefix: "/admin/api/v1"
});
router.post("/login", User.login);
router.post("/register", User.register);
module.exports = router;
