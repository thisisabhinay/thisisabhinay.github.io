import React from 'react';
import Label from '../components/Label'

const Banner = ({imageUrl}) => {
    return(
        <div className="banner banner--dark">
            <img className="banner__media" src={imageUrl} />
            <Label text={"Website is under construction"} />
        </div>
    );
};

export default Banner;
