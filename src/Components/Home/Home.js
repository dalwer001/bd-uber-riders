import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json'
import Card from '../Card/Card';
import './Home.css'


const Home = () => {
    const [transports,setTransports] = useState([])
    useEffect (() => {
        setTransports(fakeData);
    }, [])
    return (
        <div className="background">
            <div className="row m-0">
            {
            transports.map(transport =>
            <div className="col-lg-3 col-md-6 col-sm-12"><Card transport={transport}></Card></div>)
            }
            </div>
        </div>
    );
};

export default Home;