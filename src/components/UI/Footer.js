import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
    background: #222021;
    bottom: 0;
    height: 100px;
    color: #fffdd0;
    text-align: center;
    padding: 15px;
    line-height: 20px;
    & a {
        color: #d2b55b;
    }
    & a.red {
        color: red;
    }
    @media (max-width: 768px) {
        padding: 5px;
        line-height: 30px;
    }
`;

const Footer = () => {
    return (
        <Wrapper>
            <p>Powered by Andras | <a href='https://andrasvargas.com'>andrasvargas.com</a><br/><a className='red' href="mailto:av@andrasvargas.com?subject=Bug detected on SEO tool">report bug</a> </p>
        </Wrapper>
    )
}

export default Footer;