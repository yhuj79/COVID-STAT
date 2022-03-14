import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


function GraphDaily({ stat }) {
    console.log(stat);
    function date(d) {
        return stat[d].stateDt.toString().replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
    }
    function decideCntDaily(d) {
        return stat[d].decideCnt - stat[d + 1].decideCnt;
    }

    const data = {
        labels: [
            date(13), date(12), date(11), date(10), date(9), date(8), date(7),
            date(6), date(5), date(4), date(3), date(2), date(1), date(0)
        ],
        datasets: [
            {
                type: 'bar',
                label: '일일 확진자',
                backgroundColor: '#FFB85A',
                data: [
                    decideCntDaily(13), decideCntDaily(12), decideCntDaily(11), decideCntDaily(10),
                    decideCntDaily(9), decideCntDaily(8), decideCntDaily(7), decideCntDaily(6),
                    decideCntDaily(5), decideCntDaily(4), decideCntDaily(3), decideCntDaily(2),
                    decideCntDaily(1), decideCntDaily(0)
                ],
            },
        ],
    };

    return (
        <GraphDailyDiv>
            <Bar type="bar"
                data={data}
                width={300}
                height={100}
                options={{
                    maintainAspectRatio: false
                }} />
        </GraphDailyDiv>
    );
}

const GraphDailyDiv = styled.div`
    width: 1700px;
    height: 600px;
    margin: 15px;
`
export default GraphDaily;