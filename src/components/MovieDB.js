import React from 'react'
import ReactPlayer from "react-player"
// import {Row} from 'react-boostrap'

export default function MovieDB() {
    return (
        <div>
            <div>
            
            <ReactPlayer
                url="https://vimeo.com/429112435"
                width="95vw"
                height="95vh"
                autoplay
                loop="1"
                playing
                
            />
            </div>

            <div>
             <img style={{width: "95vw" }} src="https://i.ibb.co/KzWt541/Mubihaus.jpg"/>
            </div>


        </div>
         
    )
}
