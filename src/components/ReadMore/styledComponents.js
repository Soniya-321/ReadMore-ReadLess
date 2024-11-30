// Style your elements here
import styled from 'styled-components'

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`

export const Heading = styled.h1`
    font-size: 25px;
    color: #1e293b;
    font-family: Roboto;
    margin-bottom: 5px;
`

export const SubHeading = styled.p`
    color: #334155;
    font-size: 17px;
    margin-top: 5px;
`
export const Img = styled.img`
    height: 250px;
    width: 70vw;
    @media screen and (min-width: 768px) {
        width: 50vw;
        height: 300px;
    }
`
export const Para = styled.p`
    color: #334155;
    font-size: 16px;
    width: 70vw;
    @media screen and (min-width: 768px) {
        width: 50vw;
        
    }
`
export const Button = styled.button`
    background-color: #1f81ff;
    padding: 8px 15px;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    outline: none;
`
