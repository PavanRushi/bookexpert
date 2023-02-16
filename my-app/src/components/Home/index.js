import { Carousel } from 'react-bootstrap';
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
 

const HomePage = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-3'>
                    <div className='carousel-card'>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className='img'
                                    src="https://i.ibb.co/Mpr81d0/gst1.jpg"
                                    alt="Firstimg"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className='img'
                                    src="https://i.ibb.co/WH5Dkyv/gst2.jpg"
                                    alt="Secondimg"
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className='img'
                                    src="https://i.ibb.co/F3f8XMr/gst3.jpg"
                                    alt="Thirdimg"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

                <div className='col-7 headings'>
                    <Link to="/articles" className='home-page-heading'>Articles</Link>
                    <br/>
                    <Link to="/faqs" className='home-page-heading'>Faqs</Link>
                    <br/>
                    <Link to="/bookings" className='home-page-heading'>Book A Webinar</Link>
                    <h1 className='home-page-heading'>Important Dates</h1>
                    <h1 className='home-page-heading'>Trending Topics</h1>
                </div>

                <div className='col-2 para-container'>
                    <p className='paragraph'>
                        GST is a single tax on the supply of goods and services, right from the manufacturer to the consumer.
                        Credits of input taxes paid at each stage will be available in the subsequent stage of value addition,
                        which makes GST essentially a tax only on value addition at each stage.
                        There are Four GST types namely Integrated Goods and Services Tax (IGST),
                        State Goods and Services Tax (SGST), Central Goods and Services Tax (CGST),
                        and Union Territory Goods and Services Tax (UTGST).
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
