import React from "react";
import Fav from "../Favorites/favorites";
import './basic.css';

const   Basic= () => {
 return(
     <main className="main">
              <div className="main__box">
                       <div className="container">
                                  <div className="main__content">
                                          <div className="main__text">
                                                  <h1 className="main__title">The Trail Runner SWT Is Here.</h1>
                                                   <p className="main__subtitle">Durable. Comfortable. Ready to get dirty.</p>
                                                    <div className="main__btns">
                                                           <button className="main__btn1">shop man</button>
                                                           <button className="main__btn2">shop woman</button>
                                                    </div>
                                          </div>
                                  </div>
                       </div>
              </div>
              <Fav/>
     </main>
 )
}

export default  Basic;