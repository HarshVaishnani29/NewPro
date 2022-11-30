import React from "react";

function Gallery() {
    let  images = ["./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg","./images/6.jpg","./images/7.jpg","./images/8.jpg"]

    return (
        <div className="gallery">
            {
                images.map((image)=>
                {
                   return(
                    <div className="item">
                        <img src={image}/>
                    </div>
                   ) 
                })
            }
        </div>
    )
}
export default Gallery