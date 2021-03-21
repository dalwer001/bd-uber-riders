import React, { useEffect, useState } from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import fakeData from '../../fakeData/fakeData.json';
import { useParams } from 'react-router';
import './TransportInfo.css';

const TransportInfo = () => {
        const { id } =useParams(); 
        
    const [transport, setTransport] = useState([])
    const {transportName,transportImage,transportSeat,ticketPrice,from,to} = transport;

    useEffect(() => {
        setTransport(fakeData[id - 1])
    }, [id])
    


    return (
        <div className="container ">
            <div className="row m-3">
                <div className="col-md-4 mt-3 col-sm-12 shadow bg-secondary rounded">
                    <div className="mt-5">
                        <div class="mt-5 text-white bg-primary p-3 radius">
                            <h5>From: <strong>{from}</strong> </h5>
                            <h5>To: <strong>{to}</strong> </h5>
                        </div>
                        <div>
                        <div class="border rounded mt-3 mb-3">
                            <img style={{ width: '75px' }} src={transportImage} alt="" />
                            <strong> {transportName}</strong>
                            <img className="ml-3" style={{ width: '40px' }} src="https://static.thenounproject.com/png/292059-200.png" alt="" /> <strong> {transportSeat}</strong> <strong class="ml-5 text-success">${ticketPrice}</strong>
                        </div>
                        <div class="border rounded mt-3 mb-3">
                            <img style={{ width: '75px' }} src={transportImage} alt="" />
                            <strong> {transportName}</strong>
                            <img className="ml-3" style={{ width: '40px' }} src="https://static.thenounproject.com/png/292059-200.png" alt="" />  <strong> {transportSeat}</strong> <strong class="ml-5 text-success"> ${ticketPrice}</strong>
                        </div>
                        <div class="border rounded mt-3 mb-3">
                            <img style={{ width: '75px' }} src={transportImage} alt="" />
                            <strong> {transportName}</strong>
                            <img className="ml-3" style={{ width: '40px' }} src="https://static.thenounproject.com/png/292059-200.png" alt="" />  <strong> {transportSeat}</strong> <strong class="ml-5 text-success"> ${ticketPrice}</strong>
                        </div>
                        </div>
                        
                    </div>
                </div>
            
            {/* Google map */}
            <div className="col-md-8 col-sm-12 mt-3">
                <div><GoogleMap></GoogleMap></div>
                </div>
            </div>
        </div>
        
    );
};

export default TransportInfo;