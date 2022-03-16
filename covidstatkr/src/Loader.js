import ReactSpinner from 'react-spinners/ScaleLoader';
import styled from 'styled-components';

function Spinner() {
    return (
        <ReactSpinner
            height="150px"
            width="20px"
            radius="50px"
            margin="10px"
            color="#815A5A"
        />
    )
};

function Loader() {
    return (
        <Container>
            <Circle>
                <Title>Loading...</Title>
                <Spinner />
            </Circle>
        </Container>
    );
};
const Container = styled.div`
    display: table;
    margin: auto;
    min-height: 100vh;
`
const Circle = styled.div`
    display: table-cell;
    text-align: center;
    vertical-align: middle;
`
const Title = styled.p`
    margin: -10px 0 10px;
    font-size: 60px; 
    font-weight: bold;
    font-family: "Jua";
    color: #815A5A;
`;
export default Loader;