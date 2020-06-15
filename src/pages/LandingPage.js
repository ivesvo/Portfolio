import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import { Row, Col, Dropdown, Accordion, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EyeService from '../components/EyeService'
import MovieDB from '../components/MovieDB'
import ITVIEC from '../components/ITVIEC'
import {FaArrowCircleUp} from 'react-icons/fa';
import ScrollArrow from '../components/ScrollArrow'


export default function LandingPage() {
    
    return (
        <>
            <div>
                <div className="background">
                    <a name="top"></a>
                    <Row className="breadcrumbs">
                        <Col>
                           
                            <div>Visual Designer</div>
                            <div>Fullstack Web Development Student</div>
                            {/* <img width="80"src="https://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/512/Folder-icon.png"/>
                        <img width="80"src="https://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/512/Folder-icon.png"/>
                        <img width="80"src="https://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/512/Folder-icon.png"/>
                        <img width="80"src="https://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/512/Folder-icon.png"/>
                        <img width="80"src="https://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/512/Folder-icon.png"/> */}

                        </Col>
                        <Col>
                            
                            <div>Saigon, Vietnam</div>
                            <div>Available for Freelance work</div>
                            <div>ivyvodesign@gmail.com</div>
                        </Col>

                        <Col>
                            <div><a href="https://www.behance.net/itsvnat43a2" target="_blank">Behance</a></div>
                            <div><a href="https://www.linkedin.com/in/ivy-vo-b80b25158/" target="_blank" >LinkedIn</a></div>
                            <div><a href="https://github.com/ivesvo" target="_blank">Github</a></div>
                        </Col>
                        <Col>
                            <Link to="/resume">Resume</Link>
                        </Col>


                    </Row>

                </div>
                <div className="middle"></div>



                <div className="footer">
                    <Row xs={12} md={12} lg={12}>
                        <h1 style={{ fontSize: "30vh", paddingLeft: "15px" }}>SELECTED WORK</h1>
                    </Row>
                </div>
                <div className="eyeservice">
                    <EyeService></EyeService>

                </div>
                <Row style={{ paddtingBottom: "20px" }} className="breadcrumbs">

                    <Col lg={2} md={2} sm={2} xs={4}>
                        <div>Eye Service</div>
                        <div>HTML5 Game</div>
                        {/* <img width="80"src="https://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/512/Folder-icon.png"/>
                        <img width="80"src="https://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/512/Folder-icon.png"/>
                        <img width="80"src="https://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/512/Folder-icon.png"/>
                        <img width="80"src="https://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/512/Folder-icon.png"/>
                        <img width="80"src="https://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/512/Folder-icon.png"/> */}

                    </Col>
                    <Col lg={4} md={4} sm={6} xs={6}>

                        <div>
                            <Accordion>

                                <Accordion.Toggle className="accordion" eventKey="0">
                                    + More Info
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0">
                                    <div >My favourite project @CoderSchool!  <a href="https://eyeservice.netlify.app/" target="_blank" >Live Demo</a> / <a href="https://github.com/ivesvo/W3-CanvasGame" target="_blank" >Github</a></div>

                                </Accordion.Collapse>


                            </Accordion>



                        </div>



                    </Col>

                    <Col>

                    </Col>


                </Row>


                <div className="eyeservice">
                    <MovieDB></MovieDB>

                </div>
                <Row className="breadcrumbs">


                    <Col lg={2} md={2} sm={2} xs={4}>
                        <div>Mubihaus</div>
                        <div>Movie Website</div>
                        {/* <img width="80"src="https://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/512/Folder-icon.png"/>
                        <img width="80"src="https://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/512/Folder-icon.png"/>
                        <img width="80"src="https://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/512/Folder-icon.png"/>
                        <img width="80"src="https://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/512/Folder-icon.png"/>
                        <img width="80"src="https://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/512/Folder-icon.png"/> */}

                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>

                        <div>
                            <Accordion>

                                <Accordion.Toggle className="accordion" eventKey="0">
                                    + More Info
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0">
                                    <div> <a href="https://mubihaus.netlify.app/" target="_blank" >Live Demo</a> / <a href="https://github.com/ivesvo/MUBIHOUSE-" target="_blank" >Github</a> </div>
                                </Accordion.Collapse>


                            </Accordion>



                        </div>



                    </Col>

                    <Col>

                    </Col>


                </Row>
                <div className="eyeservice">
                    <ITVIEC></ITVIEC>

                </div>
                <Row className="breadcrumbs">


                    <Col lg={2} md={4} sm={2} xs={4}>
                        <div>ITVIEC</div>
                        <div>IT Career Website</div>

                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>

                        <div>
                            <Accordion>

                                <Accordion.Toggle className="accordion" eventKey="0">
                                    + More Info
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0">
                                    <div><a href="https://stupefied-boyd-4ac7ab.netlify.app/tps://mubihaus.netlify.app/" target="_blank" >Live Demo</a> / <a href="https://github.com/ivesvo/itviec" target="_blank" >Github</a> </div>
                                </Accordion.Collapse>


                            </Accordion>



                        </div>

                    </Col>
                    <Col xs={1}></Col>
                    
                    <Col>
                        <ScrollArrow/>
                        <a href="#top">Back to Top <i  href="#top" class="fal fa-arrow-up"></i> </a>
                        
                        


                    </Col>



                </Row>




            </div>
        </>
    )
}
