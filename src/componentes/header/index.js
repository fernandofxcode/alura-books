import Logo from '../logo';
import OpcoesHeader from '../opcoesHeader';
import IconesHeader from '../iconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`
function Header() {
    return (
        <HeaderContainer>
            <Logo/>            {/* Este tipo de tag de componentes não precisa ser dupla */}
            <OpcoesHeader/>    {/* Este tipo de tag de componentes não precisa ser dupla */}
            <IconesHeader/>    {/* Este tipo de tag de componentes não precisa ser dupla */}
        </HeaderContainer> 
    )
}

export default Header