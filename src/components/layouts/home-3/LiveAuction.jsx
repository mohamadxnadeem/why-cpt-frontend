import React , { useState , Fragment } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Countdown from "react-countdown";
import CardModal from '../CardModal';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const LiveAuction = props => {
    const data = props.data;

    const [modalShow, setModalShow] = useState(false);

    return (
        <Fragment>
            <section className="tf-section live-auctions">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="">
                                <h2 className="tf-title">Here's what some of our clients have to say: </h2>
                                <div className="heading-line"></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={30}

                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    767: {
                                    slidesPerView: 2,
                                    },
                                    991: {
                                    slidesPerView: 3,
                                    },
                                    1300: {
                                        slidesPerView: 4,
                                    },
                                }}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                            >
                                    {
                                        data.slice(0,7).map((item,index) => (
                                            <SwiperSlide key={index}>
                                                <div className="swiper-container show-shadow carousel auctions">
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                            <div className="slider-item">										
                                                                <div className="sc-card-product">
                                                                    <div className="card-media">
                                                                        <img src={item.img} alt="axies" />
                                                                        
                                                                        
                                                                        
                                                                    </div>
                                                                    <div className="card-title">
                                                                        <h5>{item.title}</h5>
                                                                    </div>
                                                                    <div className="meta-info">
                                                                        <div className="author">
                                                                            
                                                                            <div className="info">
                                                                                <h6> "{item.nameAuthor}""
                                                                                 </h6>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>    	
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
        </Fragment>
    );
}

LiveAuction.propTypes = {
    data: PropTypes.array.isRequired,
}


export default LiveAuction;