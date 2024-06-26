import styled from 'styled-components';

export const Container = styled.div`
background: rgba(10, 10, 16, 1);
background-size: cover;

display:flex;
flex-direction: column;
align-items: center;
gap:40px;

height: 100vh;
`;

export const Image = styled.img`
margin-top: 30px;
width: 220px;

`;

export const ContainerItens = styled.div`

`;

export const H1 = styled.h1`
font-style: normal;
font-weight: bold;
font-size: 45px;
line-height: 32.81px;
text-align: center;
color: rgba(255, 255, 255, 1);
margin-bottom: 80px;

`;

export const InputLabel = styled.p`
letter-spacing: -0.41px;
font-style: normal;
font-size: 20px;
line-height: 32.81px;
color: rgba(255, 255, 255, 1);
margin-left: 25px;

`;

export const Input = styled.input`
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;

width: 342px;
height: 58px;

border: none;
outline: none;
padding-left: 25px;
margin-bottom: 34px; 

font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 21.09px;
color: rgba(255, 255, 255, 1);



`;

export const Button = styled.button`
width: 342px;
height: 68px;
background: yellow;
border-radius: 14px;
border: none;
display:flex;
margin-top: 50px;

font-style: normal;
font-weight: bold;
font-size: 17px;
line-height: 2.5px;
display: flex;
align-items: center;
justify-content: center;
color: black;
cursor: pointer;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}

`;





