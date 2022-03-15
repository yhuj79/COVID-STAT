import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Header() {
    const NavStyle = ({ isActive }) =>
    ({
        fontFamily: 'Sunflower',
        textDecoration: 'none',
        padding: '12px 15px 10px',
        margin: '0 3px 0',
        fontSize: isActive ? '25px' : '22px',
        fontWeight: 'bold',
        color: isActive ? '#232323' : '#8C8C8C',
        backgroundColor: isActive ? '#F4F4F4' : '#E4E4E4',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
    })

    return (
        <div>
            <Title>코로나 바이러스(COVID-19) 현황판</Title>
            <StyledDiv>
                <NavLink to="/" style={NavStyle}>확진 추이</NavLink>
                <NavLink to="/deathDaily" style={NavStyle}>사망 추이</NavLink>
                <NavLink to="/decidecumulative" style={NavStyle}>누적 확진</NavLink>
                <NavLink to="/deathcumulative" style={NavStyle}>누적 사망</NavLink>
            </StyledDiv>
        </div>
    );
}
const Title = styled.p`
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    font-family: "Jua";
    background-color: #FFEAEA;
    color: #815A5A;
    margin: auto auto 30px;
    padding: 40px;
`
const StyledDiv = styled.div`
    display: flex;
`
export default Header;