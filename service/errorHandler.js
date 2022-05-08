const headers = require("./headerSetting.js");

function errorHandler(res, errorText = "發生錯誤", errorStatus = 400) {
  res.writeHead(errorStatus, headers);
  res.write(
    JSON.stringify({
      status: "fail",
      message: errorText,
    })
  );
  res.end();
}

module.exports = errorHandler;
