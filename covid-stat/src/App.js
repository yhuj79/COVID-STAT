import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DecideDaily from './DecideDaily';
import DeathDaily from './DeathDaily';
import Header from './Header';
import moment from 'moment';

// date
const format = "YYYYMMDD";
const termA = moment().format(format);
const termB = moment().subtract(15, "days").format(format);

function App() {
  const [stat, setStat] = useState(null);
  const [loading, setLoading] = useState(false);
  const serviceKey = "PDQhKwjgEGznnLng2oat2Q5kYgA%2BIj6fx%2BN1FXppnbqJ9wR2x26%2BQ7gnH7RLePFK27SPRF5F1pllsDQj4nXa%2Fg%3D%3D";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=${serviceKey}&pageNo=1&numOfRows=10&startCreateDt=${termB}&endCreateDt=${termA}`,
        )
        setStat(response.data.response.body.items.item);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
    fetchData();
  }, [])

  if (loading) {
    return <p>Loading...</p>
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
          <Route path="/deathDaily" element={<DeathDaily stat={stat} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
