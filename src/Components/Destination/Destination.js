import React from 'react';
import './Destination.css'
import map from'../../images/Map.png'

const Destination = () => {
    return (
        <div className="container ">
            <div className="row m-3">
                <div className="col-md-4 mt-3">
                    <div className="card bg-secondary shadow text-white" style={{width:'20rem',height:'21rem'}}>
                        <form className="p-3">
                        <label for="destination" class="p-3">Pick from</label>
                        <input type="text" class="form-control" id="from"></input>
                        <label for="destination" class="p-3">Pick To</label>
                        <input type="text" class="form-control" id="to"></input>
                        <button className="btn btn-danger mt-3 w-100">Search</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8 mt-3">
                    <img src={map} alt="" className="w-75"/>
                </div>
            </div>
        </div>
    );
};

export default Destination;