import React from 'react';
import { Logo, HeaderContainer } from './styles';

import Icone from '../../assets/icone.png';

function Header(props) {
    return (
    <>
        <HeaderContainer>
            <Logo src={Icone} alt='Caio Henrique Mamprin - Encurtador de URL' />
            <h1>MicroSaaS - Encurtador</h1>
            <p>{props.children}</p>
        </HeaderContainer>
    </>
    )
}

export default Header;