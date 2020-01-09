import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from "reactstrap";
import Banner from '../src/components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/custom.css';

const App = () => {
    return(
        <>
            <Container fluid={true} className="no-padding">
                <Row>
                    <Col className="no-padding">
                        <Banner />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
