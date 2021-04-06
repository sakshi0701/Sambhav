import styled from "styled-components";
import image1 from "./background.png";

export const Container = styled.div`
background: linear-gradient(90deg, #fc5185, orange);
display: flex;
justify-content: center;
align-items: center;
// padding: 0 30px;
height: 400px;
position: relative;
background: black;
z-index: 1;
`;

export const Content = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px, 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const H1 = styled.h1`
color: white;
font-size: 48px;
text-align: center;

@media screen and (max-width: 768px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`;

export const P = styled.p`
margin-top: 24px;
color: white;
font-size: 24px;
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px) {
    font-size: 24px;
}

@media screen and (max-width: 480px) {
    font-size: 18px;
}
`;