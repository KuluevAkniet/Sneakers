import React from "react";
import Logo from '../icons/Vector.svg'
import Icon1 from '../icons/gh/fr.svg'
import  Icon2 from '../icons/gh/Fram.svg'
import Icon3 from '../icons/gh/Frame.svg'
import './header.css'

const   Header = () => {
 return(
     <header className="header">
                <div className="container">
                      <nav className="header__nav">

                                <div className="header__menu1">

                                          <p className="header__item">man</p>
                                          <p className="header__item">woman</p>
                                          <p className="header__item">new arrivals</p>

                                </div>

                                <div className="header__icon">
                                          <img className="header__img" src={Logo}   alt={Logo}/>
                                </div>
                                
                                    <div className="header__logo">
                                             <p className="header__item">Sustainability</p>
                                               <div className="header__logos">
                                                    <p className="header__item">stores</p>
                                                    <img src={Icon1}   alt={Icon1}/>
                                                    <img src={Icon2}   alt={Icon2}/>
                                                    <img src={Icon3}   alt={Icon3}/>
                                               </div>
                                    </div>
                      </nav>
               </div>
     </header>
 )
}

export default  Header;