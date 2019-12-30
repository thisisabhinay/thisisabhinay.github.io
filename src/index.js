import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/Banner';
import Header from './components/Header';
import Intro from './components/Intro';
import './index.css';

const App = () => {
    return(
        <div className="wrapper">
            <Header 
                logo={'/logo.png'} 
                heading="Abhinay Thakur" 
                subheading="UX/UI Designer &amp; Frontend Engineer"
            />
            <Intro />
            <Banner imageUrl={'/gif_construction.gif'} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
