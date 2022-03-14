import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Header() {
    const NavStyle = ({ isActive }) =>
    ({
        fontFamily: 'Sunflower',
        textDecoration: 'none',
        padding: '12px 15px 10px',
        fontSize: '22px',
        fontWeight: 'bold',
        color: isActive ? '#232323' : '#4C4C4C',
        backgroundColor: isActive ? '#F9F9F9' : '#EAEAEA',
        opacity: isActive ? '1' : '0.9',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
    })

    return (
        <div>
            <Title>코로나 바이러스(COVID-19) 현황판</Title>
            <StyledDiv>
                <NavLink to="/" style={NavStyle}>확진 추이</NavLink>
                <NavLink to="/deathDaily" style={NavStyle}>사망 추이</NavLink>
            </StyledDiv>
        </div>
    );
}
const Title = styled.p`
    text-align: center;
    font-size: 45px;
    font-weight: bold;
    font-family: "Hahmlet";
    background-color: #FFE08C;
    margin: auto auto 30px;
    padding: 15px;
`
const StyledDiv = styled.div`
    display: flex;
`
export default Header;