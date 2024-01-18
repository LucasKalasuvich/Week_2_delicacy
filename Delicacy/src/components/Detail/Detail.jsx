import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import img1 from "../assets/salmon1.png";
import img2 from "../assets/dish31.png";

const Detail = () => {

    
    return <div className="detail_wrapper">
        <div className="detail_flex_bottom">
            <div className="detail_col_bottom">
                <div className="detail_img_bottom">
                    <img src={img2} alt="" />
                </div>
                <div className="detail_card_bottom">
                    <div className="detail_card2_bottom">
                            <h3>Caesar Salad</h3>
                    </div> 
                </div>

                <div className="detail_img_bottom">
                    <img src={img2} alt="" />
                </div>
                <div className="detail_card_bottom">
                    <div className="detail_card2_bottom">
                            <h3>Spaghetti</h3>
                    </div>
                </div>

                <div className="detail_img_bottom">
                    <img src={img2} alt="" />
                </div>
                <div className="detail_card_bottom">
                    <div className="detail_card2_bottom">
                            <h3>Crab Claws</h3>
                    </div>
                </div>

                <div className="detail_img_bottom">
                    <img src={img2} alt="" />
                </div>
                <div className="detail_card_bottom">
                    <div className="detail_card2_bottom">
                            <h3>Grilled Salmon</h3>
                    </div>
                    
                </div>
            </div>
            
        </div>
        
    </div>
}

export default Detail