import { useState, useEffect } from 'react';
import axios from 'axios';

function DailyStat() {
    const [stat, setStat] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=PDQhKwjgEGznnLng2oat2Q5kYgA%2BIj6fx%2BN1FXppnbqJ9wR2x26%2BQ7gnH7RLePFK27SPRF5F1pllsDQj4nXa%2Fg%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20220302&endCreateDt=20220308`,
                )
                setStat(response.data.stat);
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
            <h1>s</h1>
        </div>
    );
}

export default DailyStat;