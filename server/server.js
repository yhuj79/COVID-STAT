const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const request = require("request");
const convert = require("xml-js");
const moment = require("moment-timezone");
const PORT = process.env.PORT || 5050;

app.use(cors());

app.get("/api/xml", (req, res) => {
  const format = "YYYYMMDD";
  const termA = moment().tz("Asia/Seoul").format(format);
  const termB = moment().tz("Asia/Seoul").subtract(15, "days").format(format);

  request(
    {
      url: `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=10&startCreateDt=${termB}&endCreateDt=${termA}`,
      method: "GET",
    },
    (error, response, body) => {
      const xmlToJson = convert.xml2json(body, { compact: true, space: 4 });
      res.send(xmlToJson);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
