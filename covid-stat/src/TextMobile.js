import React from 'react';
import styled from 'styled-components';

function TextMobile() {
    return (
        <StyledDiv>
            <p>모바일 버전은 가로 모드를 권장합니다.</p>
        </StyledDiv>
    );
}
const StyledDiv = styled.div`
    text-align: center;
    font-weight: bold;
    margin: 0 0 -10px;
    display: none;

    @media screen and (max-width: 767px) {
        display: block;
    }
`
export default TextMobile;