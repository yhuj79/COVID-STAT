import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Header() {
    const NormalStyle = ({ isActive }) =>
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
    const MobileStyle = ({ isActive }) =>
    ({
        fontFamily: 'Sunflower',
        textDecoration: 'none',
        padding: '6px 9px 5px',
        margin: '0 3px 0',
        fontSize: isActive ? '13px' : '10px',
        fontWeight: 'bold',
        color: isActive ? '#232323' : '#8C8C8C',
        backgroundColor: isActive ? '#F4F4F4' : '#E4E4E4',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
    })

    return (
        <div>
            <Title>코로나 바이러스 현황판</Title>
            <NormalDiv>
                <NavLink to="/" style={NormalStyle}>확진 추이</NavLink>
                <NavLink to="/deathDaily" style={NormalStyle}>사망 추이</NavLink>
                <NavLink to="/decidecumulative" style={NormalStyle}>누적 확진</NavLink>
                <NavLink to="/deathcumulative" style={NormalStyle}>누적 사망</NavLink>
            </NormalDiv>
            <MobileDiv>
                <NavLink to="/" style={MobileStyle}>확진 추이</NavLink>
                <NavLink to="/deathDaily" style={MobileStyle}>사망 추이</NavLink>
                <NavLink to="/decidecumulative" style={MobileStyle}>누적 확진</NavLink>
                <NavLink to="/deathcumulative" style={MobileStyle}>누적 사망</NavLink>
            </MobileDiv>
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

    @media screen and (min-width:768px) and (max-width: 1023px) {
        font-size: 50px;
    }
    @media screen and (max-width:767px){
        font-size: 25px;
        margin: auto auto 12px;
        padding: 12px;
    }
`
const NormalDiv = styled.div`
    display: flex;
    display: "";

    @media screen and (max-width:767px){
        display: none;
    }
`
const MobileDiv = styled.div`
    display: none;

    @media screen and (max-width:767px){
        display: flex;
    }
`
export default Header;