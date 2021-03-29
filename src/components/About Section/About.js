import React from 'react'
import { Container, SubContainer, Picture, Content, Heading, FeatureContainer, Feature, Title, FeatureHeading, Desc } from './AboutStyles';

const About = () => {
    return (
        <>
        <Container>

            <SubContainer>
                <Picture>
                    pic
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
                    pic
                </Picture>
            </SubContainer>

            <SubContainer>
                <Picture>
                    pic
                </Picture>
                <Content>
                    <Heading>Education</Heading>
                    Content
                </Content>
            </SubContainer>

            <SubContainer>
                <Content>
                    <Heading>Agriculture&Environment</Heading>
                    Content
                </Content>
                <Picture>
                    pic
                </Picture>
            </SubContainer>

            <SubContainer>
                <Picture>
                    pic
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
