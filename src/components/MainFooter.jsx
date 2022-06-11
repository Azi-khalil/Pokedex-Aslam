import React from 'react'
import logo from '../images/pokemonLogo.svg'
import flogo from '../images/fluidLogo.svg'

function MainFooter() {
    return (
        <div className='footerContainer'>
            <img src={logo} alt='logo' />
            <div>|</div>
            <img src={flogo} alt='fluidlogo' />
        </div>
    )
}

export default MainFooter