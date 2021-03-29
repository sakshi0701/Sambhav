import styled from 'styled-components';

export const Container = styled.div`
    border: 2px solid red;
    min-height: 50vh;
    margin: 20px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
`;

export const SubContainer = styled.div`
    border: 2px solid red;
    width: 100%;
    margin: 20px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;

export const Picture = styled.div`
    border: 2px solid red;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const Content = styled.div`
    border: 2px solid red;
    width: 60%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
`;

export const Heading = styled.h1`
    color: #0096c7;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
`;

export const FeatureContainer = styled.div`
    border: 2px solid green;
    width: 100%;
    margin: 50px 0px;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;

export const Feature = styled.div`
    border: 2px solid red;
    height: 350px;
    width: 350px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
`;

export const FeatureHeading = styled.h1`
    transform: rotate(270deg);
    width: 100%;
    font-size: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-style: italic;
    color: grey;
`;

export const Desc = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 30px;
    color: #00b4d8;
`;

export const Title = styled.div`
    height: 100%;
    width: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
`;