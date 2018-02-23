const crypto = require("crypto");

function ksort(obj) {
  const keys = Object.keys(obj).sort();
  const sortedObj = {};

  for (let i in keys) {
    sortedObj[keys[i]] = obj[keys[i]];
  }

  return sortedObj;
}

module.exports = function createSignature(
  data = {},
  apiKey,
  apiSecret,
  timestamp
) {
  data["apiKey"] = apiKey;
  data["timestamp"] = timestamp;

  const json = JSON.stringify(ksort(data));

  const hmac = crypto.createHmac("sha512", apiSecret);
  return hmac.update(new Buffer(json, "utf-8")).digest("base64");
};
