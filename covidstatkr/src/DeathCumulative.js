import React from 'react';
import './Chart.css';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import TextUpdate from './TextUpdate';

Chart.register(...registerables);
Chart.defaults.color = "#000";

function DeathCumulative({ stat }) {

    function date(d) {
        return stat[d]?.stateDt._text.toString().substr(4).replace(/(\d{2})(\d{2})/g, '$1.$2');
    }
    function cnt(d) {
        return Number(stat[d]?.deathCnt._text);
    }

    const data = {
        labels: [
            date(14), date(13), date(12), date(11), date(10), date(9), date(8),
            date(7), date(6), date(5), date(4), date(3), date(2), date(1)
        ],
        datasets: [
            {
                type: 'line',
                label: ' 누적',
                backgroundColor: 'rgba(0,34,102,0.3)',
                borderColor: '#24468A',
                fill: true,
                data: [
                    cnt(13), cnt(12), cnt(11), cnt(10), cnt(9), cnt(8), cnt(7),
                    cnt(6), cnt(5), cnt(4), cnt(3), cnt(2), cnt(1), cnt(0)
                ],
            },
        ],
    };

    const options = {
        maxBarThickness: 40, // bar 세로
        plugins: {
            legend: { // 범례
                display: false,
            },
            tooltip: { // 툴 팁
                padding: 15,
                bodySpacing: 5,
            }
        }
    }

    return (
        <div className="chart_div">
            <p className="chart_title">
                {stat[1]?.stateDt._text.toString().substr(4).replace(/(\d{2})(\d{2})/g, '$1월 $2일')} 누적 사망자
                <span className="chart_titlespan"> {cnt(0).toLocaleString('en')}</span>명
            </p>
            <Bar type="bar"
                data={data}
                width={300}
                height={100}
                options={options}
            />
            <TextUpdate />
        </div>
    );
}
export default DeathCumulative;