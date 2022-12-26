const express = require("express");
const app = express();
require('dotenv').config();
const cors = require("cors");
const request = require("request");
const convert = require("xml-js");
const port = 5050;

const moment = require("moment");
const format = "YYYYMMDD";
const termA = moment().format(format);
const termB = moment().subtract(15, "days").format(format);
const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=10&startCreateDt=${termB}&endCreateDt=${termA}`;

app.use(cors());

app.get("/api/xml", (req, res) => {
  request(
    {
      url: url,
      method: "GET",
    },
    (error, response, body) => {
      const xmlToJson = convert.xml2json(body, {compact: true, space: 4});
      res.send(xmlToJson);
    }
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
