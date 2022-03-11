import React from 'react';
import styled from 'styled-components';

function CovidStatGraph({ stat }) {
    console.log(stat);

    return (
        <CovidStatGraphDiv>
            <div>
                <p>{stat[13].decideCnt - stat[14].decideCnt}</p>
                <p>{stat[13].stateDt.toString().replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</p>
            </div>
            <div>
                <p>{stat[12].decideCnt - stat[13].decideCnt}</p>
                <p>{stat[12].stateDt.toString().replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</p>
            </div>
            <div>
                <p>{stat[11].decideCnt - stat[12].decideCnt}</p>
                <p>{stat[11].stateDt.toString().replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</p>
            </div>
            <div>
                <p>{stat[10].decideCnt - stat[11].decideCnt}</p>
                <p>{stat[10].stateDt.toString().replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</p>
            </div>
            <div>
                <p>{stat[9].decideCnt - stat[10].decideCnt}</p>
                <p>{stat[9].stateDt.toString().replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</p>
            </div>
            <div>
                <p>{stat[8].decideCnt - stat[9].decideCnt}</p>
                <p>{stat[8].stateDt.toString().replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</p>
            </div>
            <div>
                <p>{stat[7].decideCnt - stat[8].decideCnt}</p>
                <p>{stat[7].stateDt.toString().replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</p>
            </div>
            <div>
                <p>{stat[6].decideCnt - stat[7].decideCnt}</p>
                <p>{stat[6].stateDt.toString().replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</p>
            </div>
            <div>
                <p>{stat[5].decideCnt - stat[6].decideCnt}</p>
                <p>{stat[5].stateDt.toString().replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</p>
            </div>
            <div>
                <p>{stat[4].decideCnt - stat[5].decideCnt}</p>
                <p>{stat[4].stateDt.toString().replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</p>
            </div>
            <div>
                <p>{stat[3].decideCnt - stat[4].decideCnt}</p>
                <p>{stat[3].stateDt.toString().replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</p>
            </div>
            <div>
                <p>{stat[2].decideCnt - stat[3].decideCnt}</p>
                <p>{stat[2].stateDt.toString().replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</p>
            </div>
            <div>
                <p>{stat[1].decideCnt - stat[2].decideCnt}</p>
                <p>{stat[1].stateDt.toString().replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</p>
            </div>
            <div>
                <p>{stat[0].decideCnt - stat[1].decideCnt}</p>
                <p>{stat[0].stateDt.toString().replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</p>
            </div>
        </CovidStatGraphDiv>
    );
}

const CovidStatGraphDiv = styled.div`
    display: flex;

    & > div {
        margin: 10px;
    }
`
export default CovidStatGraph;