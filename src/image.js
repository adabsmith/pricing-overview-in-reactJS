import React, { Component} from 'react';
import images from './social media 1080.jpg'

class Image extends React.Component {
    render() {
        return(
            <div>
                <img src={images} alt="" style={{ width: '400px', height: 'auto', borderRadius: '10px', marginTop: '0px'}}/>
            </div>
        )
    }
    
}
export {Image}