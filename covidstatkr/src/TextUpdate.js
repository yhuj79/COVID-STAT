import React from 'react';
import styled from 'styled-components';

function TextUpdate() {
    return (
        <StyledDiv>
            <p>매일 09시 경 업데이트</p>
        </StyledDiv>
    );
}
const StyledDiv = styled.div`
    text-align: center;
    font-weight: bold;
`
export default TextUpdate;