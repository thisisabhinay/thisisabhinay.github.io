import React from 'react';
import { Row, Col } from "reactstrap";
import '../../components/Banner/Banner.css';

const Banner = () => {
    return(
        <Row>
            <Col className="banner d-flex align-items-end justify-content-center align-self-start mh-100">
                <Row className="banner__content d-lg-none align-items-end">
                    <Col xs="12" >
                        <h5 className="text-shadow font-weight-bold text-white text-center text-uppercase">
                            Abhinay Thakur
                        </h5>
                    </Col>
                    <Col xs="12">
                        <p className="text-shadow font-weight-bold text-white text-center ">
                            Product Designer // Frontend Engineer
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Banner;
