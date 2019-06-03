const userModel = require("../model/user.js");
const config = require("../config/index.js");
const util = require("../util/index");
module.exports = {
  register: async (ctx, next) => {
    let { name, password, phone } = ctx.request.body;
    if (name && password) {
      password = util.createHash(password);
      const result = await new userModel({
        name: name,
        password: password,
        phone: phone
      }).save();
      console.log("register result is", result);
      if (!result)
        return (ctx.body = {
          code: "400",
          message: "register fail"
        });
      else
        return (ctx.body = {
          code: "200",
          message: "register success!"
        });
    }
  },
  login: async (ctx, next) => {
    const data = ctx.request.body;
    if (!data.name || !data.password) {
      return (ctx.body = {
        code: "",
        data: null,
        message: "the usernumber or password can't be null"
      });
    }
    data.password = util.createHash(data.password);
    const result = await userModel.find({
      name: data.name,
      password: data.password
    });
    if (result && result.length) {
      const token = util.sign(result);
      return (ctx.body = {
        code: "200",
        token: token,
        message: "login success"
      });
    } else {
      return (ctx.body = {
        code: "400",
        data: null,
        message: "usernumber or password is error"
      });
    }
  },
  getuserinfo: async (ctx, next) => {
    const { name } = ctx.request.query;
    if (name) {
      const result = await userModel.findOne({
        name: name
      });
      console.log(result);
      result
        ? (ctx.body = { code: 200, data: result, message: "ok" })
        : (ctx.body = { code: 200, data: null, message: "ok" });
    } else {
      ctx.body = {
        code: 400,
        message: "name is null"
      };
    }
  }
};
