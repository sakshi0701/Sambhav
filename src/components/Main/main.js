import React from 'react';
import { Container, Background, Content, H1, P } from "./mainstyle";
import '../About Section/image.css'

const Main = () => {
    return (
        <Container>
            {/* <Background> */}
                <div className="background"></div>
            {/* </Background> */}
            <Content>
                <H1> A TagLine</H1>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam atque ea suscipit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quam ratione voluptatem?</P>
            </Content>
        </Container>
    )
}

export default Main;