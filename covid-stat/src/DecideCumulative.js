import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function DecideCumulative({ stat }) {

    function date(d) {
        return stat[d].stateDt.toString().substr(4).replace(/(\d{2})(\d{2})/g, '$1.$2');
    }
    function cnt(d) {
        return stat[d].decideCnt;
    }

    const data = {
        labels: [
            date(13), date(12), date(11), date(10), date(9), date(8), date(7),
            date(6), date(5), date(4), date(3), date(2), date(1), date(0)
        ],
        datasets: [
            {
                type: 'bar',
                label: '누적',
                backgroundColor: '#99004C',
                borderWidth: 3,
                borderColor: '#BD2470',
                borderRadius: 15,
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
        },
        scales: {
            yAxes: {
                ticks: {
                    color: "#000",
                },
            },
            xAxes: {
                ticks: {
                    color: "#000",
                },
                grid: {
                    display: false,
                },
            }
        }
    }

    return (
        <StyledDiv>
            <TodayTitle>
                {stat[0].stateDt.toString().substr(4).replace(/(\d{2})(\d{2})/g, '$1월 $2일')} 누적 확진자
                <span> {cnt(0).toLocaleString('en')}</span>명
            </TodayTitle>
            <Bar type="bar"
                data={data}
                width={300}
                height={100}
                options={options}
            />
        </StyledDiv>
    );
}
const TodayTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin-left: 70px;

    & > span {
        font-size: 25px;
        color: red;
    }
`
const StyledDiv = styled.div`
    background-color: #F4F4F4;
    width: 1200px;
    margin: auto;
    margin-top: -3px;
    padding: 0 30px 30px;
    border: 3px solid #E4E4E4;
    border-radius: 15px;

    @media screen and (max-width:767px) {
        width: 99%;
    }
`
export default DecideCumulative;