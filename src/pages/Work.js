import React from 'react'
import { Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Work() {
    return (
        <div>
            <div className="background">
            <Row className="breadcrumbs">
                    <Col>
                       
                    </Col>
                    <Col>
                        
                    </Col>

                    <Col>
                        
                    </Col>
                    <Col>
                    <Link to="/landingpage">Home</Link>
                    </Col>


                </Row>

                
            <div className="footer">
                <Row xs={12} md={12} lg={12}>
                    <h1 style={{ fontSize: "30vh"}}>RÉSUME</h1>
                </Row>
            </div>
            <div className="middle1">
                
            </div>
                <Row className="breadcrumbs">
                    <Col>
                        <div>Ivy Vo is a visual designer based in
Saigon, Vietnam. Focusing on art direction & designing visual identities for events, artists, brands within cultural, media and fashion fields. Exploring the intersection of technology and human emotions, and how the virtual can blend within the real.</div>
                        

                    </Col>
                    <Col lg={1}>
                    </Col>
                    <Col>
                        <div>EXPERIENCE</div>
                        <div className="light" style={{paddingBottom: "20px", paddingTop: "20px"}}>
                            <div style={{marginLeft: "5px"}} >Lab</div>
                            <div style={{marginLeft: "10px"}}>Junior</div>
                            <div style={{marginLeft: "15px"}}>Graphic Designer</div>
                            <div style={{marginLeft: "20px"}}>July 17 - April 20</div>

                        </div>

                        <div style={{paddingBottom: "20px"}}>
                            <div style={{marginLeft: "5px"}} >The New District</div>
                            <div style={{marginLeft: "10px"}}>Freelance</div>
                            <div style={{marginLeft: "15px"}}>Graphic Designer</div>
                            <div style={{marginLeft: "20px"}}>April 17 - Dec 19</div>

                        </div>

                        <div style={{paddingBottom: "20px"}}>
                            <div style={{marginLeft: "5px"}} >Tomochi Creative</div>
                            <div style={{marginLeft: "10px"}}>Junior</div>
                            <div style={{marginLeft: "15px"}}>Art Director</div>
                            <div style={{marginLeft: "20px"}}> April 17 - July 17</div>

                        </div>
                        
                    </Col>

                    <Col>
                        <div>EDUCATION & TRAINING</div>
                        <div style={{paddingBottom: "20px", paddingTop: "20px"}}>
                            <div style={{marginLeft: "5px"}} >Coder School</div>
                            <div style={{marginLeft: "10px"}}>Fullstack</div>
                            <div style={{marginLeft: "15px"}}>Web Development</div>
                            <div style={{marginLeft: "20px"}}>May 20 - July 20</div>

                        </div>

                        <div style={{paddingBottom: "20px", }}>
                            <div style={{marginLeft: "5px"}}>Cardiff Metropolitan</div>
                            <div style={{marginLeft: "10px"}}>University</div>
                            <div style={{marginLeft: "15px"}}>MA  Art & Design:</div>
                            <div style={{marginLeft: "15px"}}>Design Futures</div>
                            <div style={{marginLeft: "20px"}}>Sep 16 - Sep 17</div>

                        </div>

                        <div style={{paddingBottom: "20px"}}>
                            <div style={{marginLeft: "5px"}}>University of</div>
                            <div style={{marginLeft: "5px"}}>The West of England (UWE)</div>
                            <div style={{marginLeft: "15px"}}>Marketing</div>
                            <div style={{marginLeft: "20px"}}> Sep 14 - May 16</div>

                        </div>
                        
                    </Col>

                    <Col>
                    <div>SKILLS</div>
                    <div style={{paddingBottom:"20px", paddingTop: "20px"}}>
                        <div >Creative Direction</div>
                        <div >Digital Media</div>
                        <div >Web Design</div>
                        <div >Identity Design</div>

                    </div>

                    <div>SOFTWARE</div>
                    <div style={{paddingBottom:"20px", paddingTop: "20px"}}>
                        <div>Adobe Suite</div>
                        <div style={{marginLeft: "10px"}}>Ps / Ai / Ae/ Xd</div>
                        <div>Cinema4D</div>
                        <div>Visual Code Studio</div>
                        <div>Processing</div>
                        <div>Google Suite</div>
                        <div>Microsoft Office</div>
                        <div style={{marginLeft:"10px"}}>Word / PowerPoint</div>
                        <div>Keynote</div>


                    </div>
                    
                    </Col>

                    <Col><div>LANGUAGES</div>
                    
                        <div>Vietnamese</div>
                        <div>English</div>
                        <div>Javascript</div>
                        <div style={{marginLeft: "10px"}}>React/React Router/Redux</div>
                        <div>HTML/CSS</div>

                    </Col>


                </Row>

            </div>
        


        </div>
    )
}
