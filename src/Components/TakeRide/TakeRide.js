import React from 'react';
import { Link } from 'react-router-dom';

const TakeRide = () => {
    return (
        <div>
            <div class="container text-center mt-3">
            <h3>Select Ride</h3>
            <Link to="/home">
            <button class="btn btn-success">Take Ride</button>
            </Link>
        </div>
        </div>
    );
};

export default TakeRide;