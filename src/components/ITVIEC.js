import React from 'react'
import ReactPlayer from "react-player"
import {Col, Row} from 'react-bootstrap'

export default function ITVIEC() {
    return (
        <div>
            <div>
            <ReactPlayer
                url="https://vimeo.com/429115280"
                width="95vw"
                height="95vh"
                autoplay
                loop="1"
                playing
                
            />
            

            </div>
          
            <Row xs={12} sm={12} md={8} lg={8}>

            <div>
                <img style={{maxWidth: "95vw" }} src="https://i.ibb.co/br6RCQ5/ITVIECPHONE.jpg"/>
            </div> 
            </Row>
            
        </div>
    )
}
