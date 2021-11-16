import React from "react";
import './favorites.css';

const   Fav  = () => {
 return(
            <div className="favorites">
                       <div className="container">
                               <div className="favorites">
                                      <h1 className="favorites__title"> Our  Favorites</h1>
                                         <div className="favorites__menu">
                                                <button className=" favorites__btn">every day </button>
                                                <button className=" favorites__btn">runnig</button>
                                                <button className=" favorites__btn">travel</button>
                                         </div>
                                        <hr></hr>
                               </div>
                       </div>
            </div>
 )
 }
export default  Fav;