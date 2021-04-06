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
    width: 20%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (max-width: 414px) {
        width: 90%;
        z-index:1;
    }
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
    z-index: 2;
`;

export const Heading = styled.h1`
    color: #0096c7;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    @media screen and (max-width: 980px) {
        font-size: 30px;
    }

    @media screen and (max-width: 700px) {
        font-size: 20px;
    }
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
    background: rgb(240, 240, 240);
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

    @media screen and (max-width: 360px) {
        font-size: 50px;
    }

    @media screen and (max-width: 300px) {
        font-size: 40px;
    }
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