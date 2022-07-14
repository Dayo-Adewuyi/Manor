import React from "react";
import styled, { keyframes } from "styled-components";
import TypeWriterText from "../TypeWriterText";
import CoverVideo from "../CoverVideo";
import PIC from "../../assets/Rounded-Text-Black.png"


const rotate = keyframes`
100%{
    transform: rotate(1turn);
}
`

const Section = styled.section`

min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};

`

const Container = styled.div`

width: 75%;
min-height: 80vh;
margin: 0 auto;


display: flex;
justify-content: center;
align-items: center;
`

const Box =  styled.div `
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Round = styled.div`
position: absolute;
bottom: 2rem;
right: 90%;
width: 6rem;
height: 6rem;
border: 1px solid ${props=> props.theme.text};
border-radius: 50%;

img{
    width: 100%;
    height: auto;
    animation: ${rotate} 10s linear infinite reverse;
}
`



const Home = () =>{

return(
    <Section>
        <Container>
            <Box> <TypeWriterText/> </Box>
            <Box> <CoverVideo/> </Box>

            <Round>
               
        <img src={PIC} alt="monar"/>
     </Round>
        </Container>
     
    </Section>
)
}

export default Home