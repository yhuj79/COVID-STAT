import { useState, useEffect } from 'react';
import axios from 'axios';
import CovidStatGraph from './CovidStatGraph';
import moment from 'moment';

const serviceKey = "PDQhKwjgEGznnLng2oat2Q5kYgA%2BIj6fx%2BN1FXppnbqJ9wR2x26%2BQ7gnH7RLePFK27SPRF5F1pllsDQj4nXa%2Fg%3D%3D";
const format = "YYYYMMDD";
const termA = moment().format(format);
const termB = moment().subtract(15, 'days').format(format);

function CovidStat() {
    const [stat, setStat] = useState(null);
    const [loading, setLoading] = useState(false);

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
        <div>
            <h1>{termB} + 1</h1>
            <h1>{termA}</h1>
            <CovidStatGraph stat={stat} />
        </div>
    );
}

export default CovidStat;