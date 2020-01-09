import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from "reactstrap";
import Banner from './components/Banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/custom.css';

const App = () => {
    return(
        <>
            <Container fluid={true} className="no-padding">
                <Row>
                    <Col lg="8">
                        <Banner />
                    </Col>
                    <Col lg="4">
                        lorem ipsum...
                    </Col>
                </Row>
            </Container>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
