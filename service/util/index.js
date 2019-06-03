const crypto = require("crypto");
const config = require("../config/index");
const jwt = require("jsonwebtoken");
module.exports = {
  createHash: value => {
    const hmac = crypto.createHash("sha256", config.secret);
    hmac.update(value);
    return hmac.digest("hex");
  },
  sign(result) {
    return jwt.sign(
      {
        _id: result._id,
        name: result.name
      },
      config.secret,
      config.expiresIn
    );
  },
  verify(ctx, decodedToken, token) {
    let ret = true;
    try {
      const payload = jwt.verify(token, config.secret);
      if (payload) ret = false;
    } catch (err) {
      console.log(err.name);
    }
    return ret;
  }
};
