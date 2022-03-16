import React from 'react';
import styled from 'styled-components';
import dataportal from './SourceImage/dataportal.png';
import mohw from './SourceImage/mohw.png';

function Source() {
    return (
        <SourceDiv>
            <a href="https://www.data.go.kr/index.do" target="_blank" rel="noopener noreferrer">
                <img className="home_sourceimg" alt="" src={dataportal} />
            </a>
            <a href="http://www.mohw.go.kr/react/index.jsp" target="_blank" rel="noopener noreferrer">
                <img className="home_sourceimg" alt="" src={mohw} />
            </a>
        </SourceDiv>
    );
}
const SourceDiv = styled.div`
    display: flex;
    & > a > img {
        width: 200px;
        margin: 30px 100px 30px;
        border-radius: 10px;
        border: 3px solid #E4E4E4;
<<<<<<< HEAD:covidstatkr/src/Source.js
        @media screen and (max-width:767px) {
            width: 120px;
            margin: 12px;
        }
=======
>>>>>>> cd580a887cb0f95dd9c4fb71dfee7b97c2105f87:covid-stat/src/Source.js
    }
    & > a > img:hover {
        border: 3px solid #C6C6C6;
    }
`
export default Source;