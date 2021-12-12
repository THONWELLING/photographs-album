import styled from 'styled-components'




export const Header = styled.div`
    max-width: 100vw;
    height: 120px;
    background-color: #707070;
    display: flex;
    justify-content: space-around;
    padding: 10px 50px;
    align-items: center;

    p {
        font-size: 30px;
        color: #141414;
        font-weight: bold;
    }
    div {
        display: flex;
        gap: 20px;
    }
    i {
        font-size: 35px;
        background-color: blue;
        color: #DCDCDC;
        border-radius: 8px;
        padding: 6px;
    }
    .git {
        background-color: #000;
    }

    i:hover,
    .git:hover {
        transform: scale(1.2);
        transition: 0.3s;
    }

    @media screen and (max-width:776px) {
        padding:10px 20px;
            p,
            i {
                font-size: 18px;
            }
    }


`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #4F4F4F;
    width: 100%;
    min-height: 100vh;
    padding-bottom: 30px;
`

export const H1 = styled.h1`
    font-size: 60px;
    color: #141414;
    text-shadow: 1px 1px 2px #A020F0;

    @media screen and (max-width:776px) {
        font-size:26px
    }

`

export const ContainerImage = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
export const List = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
`
export const Image = styled.img`
    width: 233px;
    height: 350px;
    border-radius: 10px;
    transform: scale(0.9);
    transition: 0.3s;

    &:hover{
        transform: scale(1);
    }
`
export const Info = styled.a`
    position: relative;
    bottom: 60px;
    text-shadow: 1px 1px 2px #c0c0c0;
    color: #141414;
    font-size: 20px;
    font-weight: bolder;
    text-decoration: none;

    &:hover{
        color: #404040;
        transition: 0.3s;
    }
`
export const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;

    div {
        display: flex;
        gap: 15px;
        align-items:center;
        justify-content: center;
    }
    p {
        color: #fff;
        font-size: 40px
    }

    .number {
        color: #ccc;
        font-size: 18px
    }
`

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    
    &:hover {
        color: #141414;
        transform: scale(1.3);
        transition: 0.3s;
    }
    &:active {
        opacity: 0.6;
    }

    i {
        font-size: 50px;
        color: #141414;
    }
    
`

export const Footer = styled.div`
    max-width: 100vw;
    height: 100px;
    background-color: #707070;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 40px;

    p {
        color: #000;
        font-weight: bold;
        font-size: 25px;
    }


    img {
        height: 47px;
    }
` 