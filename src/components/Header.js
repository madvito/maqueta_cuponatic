import React from 'react'
import { Link } from 'react-router-dom'
import HeaderButton from './HeaderButton'
import Cuenta from './icons/Cuenta'
import CuponaticLogo from './icons/CuponaticLogo'
import Lupa from './icons/Lupa'
import Menu from './icons/Menu'

const Header = () => {
    return (
        <nav className='header'>
            <HeaderButton Icon={Menu} text='Menu'/>
            <Link to='/'><CuponaticLogo/></Link>
            <HeaderButton Icon={Lupa} text='Buscar'/>
            <HeaderButton Icon={Cuenta} text='Cuenta'/>

        </nav>
    )
}

export default Header
