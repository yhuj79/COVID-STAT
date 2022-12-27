import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import Header from "./Header";
import DecideDaily from "./DecideDaily";
import DeathDaily from "./DeathDaily";
import DecideCumulative from "./DecideCumulative";
import DeathCumulative from "./DeathCumulative";
import TextMobile from "./TextMobile";
import Source from "./Source";

function App() {
  const [loading, setLoading] = useState(false);
  const [stat, setStat] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(process.env.REACT_APP_ADDRESS_KEY);
        setStat(res.data.response.body.items.item);
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
    <Router>
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
