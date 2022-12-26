import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import Loader from "./Loader";
import Header from "./Header";
import DecideDaily from "./DecideDaily";
import DeathDaily from "./DeathDaily";
import DecideCumulative from "./DecideCumulative";
import DeathCumulative from "./DeathCumulative";
import TextMobile from "./TextMobile";
import Source from "./Source";

// date
const format = "YYYYMMDD";
const termA = moment().format(format);
const termB = moment().subtract(15, "days").format(format);

function App() {
  const [stat, setStat] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios?.get(
          `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=10&startCreateDt=${termB}&endCreateDt=${termA}`
        );
        setStat(res.data.response.body.items.item);
        console.log(res.data.response.body.items.item);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (!stat) {
    return null;
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<DecideDaily stat={stat} />} />
          <Route path="/deathdaily" element={<DeathDaily stat={stat} />} />
          <Route
            path="/decidecumulative"
            element={<DecideCumulative stat={stat} />}
          />
          <Route
            path="/deathcumulative"
            element={<DeathCumulative stat={stat} />}
          />
        </Routes>
        <TextMobile />
        <Source />
      </div>
    </Router>
  );
}
export default App;
