import React from 'react';
import { Container, SubContainer, Picture, Content, Heading, FeatureContainer, Feature, Title, FeatureHeading, Desc } from './AboutStyles';
import './image.css';

const About = () => {
    return (
        <>
        <Container>

            <SubContainer>
                <Picture>
                    <div className="buissness"></div>
                </Picture>
                <Content>
                    <Heading>Buissness</Heading>
                    Content
                </Content>
            </SubContainer>

            <SubContainer>
                <Content>
                    <Heading>Health</Heading>
                    Content
                </Content>
                <Picture>
                <div className="health"></div>
                </Picture>
            </SubContainer>

            <SubContainer>
                <Picture>
                <div className="education"></div>
                </Picture>
                <Content>
                    <Heading>Education</Heading>
                    Content
                </Content>
            </SubContainer>

            <SubContainer>
                <Content>
                    <Heading>Agriculture</Heading>
                    Content
                </Content>
                <Picture>
                <div className="environment"></div>
                </Picture>
            </SubContainer>

            <SubContainer>
                <Picture>
                <div className="tech"></div>
                </Picture>
                <Content>
                    <Heading>Technology</Heading>
                    Content
                </Content>
            </SubContainer>

            <FeatureContainer>

                <Feature>
                    <Title>
                        <FeatureHeading>Donate</FeatureHeading>
                    </Title>                    
                    <Desc>Description</Desc>
                </Feature>

                <Feature>
                    <Title>
                        <FeatureHeading>Post</FeatureHeading>
                    </Title>                    
                    <Desc>Description</Desc>
                </Feature>

                <Feature>
                    <Title>
                        <FeatureHeading>Discuss</FeatureHeading>
                    </Title>                    
                    <Desc>Description</Desc>
                </Feature>

            </FeatureContainer>

        </Container>
        </>
    )
}

export default About;
