import React from 'react';
import {Link} from "react-router-dom";
import Star from "./star";
import './Rating.css'

const Rating = () => {
    return (
        <div className='rating'>
            <div>
                <span>4,6</span>
                <span className='rating__star'>
                    <Star width={12} height={12} fill='#ffc107'/>
                    <Star width={12} height={12} fill='#ffc107'/>
                    <Star width={12} height={12} fill='#ffc107'/>
                    <Star width={12} height={12} fill='#ffc107'/>
                    <Star width={12} height={12} fill='#ffc107'/>
                </span>
                <span>(<Link to={'#'}>351</Link>)</span>
            </div>
            <Link to={'#'}>краеведческий музей</Link>
        </div>
    );
}
export default Rating