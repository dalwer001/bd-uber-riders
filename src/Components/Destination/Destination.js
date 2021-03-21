import React, { useEffect, useState } from 'react';
import './Destination.css'
import map from '../../images/Map.png'
import { useHistory, useParams } from 'react-router';

import GoogleMap from '../GoogleMap/GoogleMap';


const Destination = () => {
    const { id,transportName } =useParams(); 



const history = useHistory();
const handleTransportInfo = (id,transportName) =>{
    history.push(`/transportInfo/${id}/${transportName}`);
}
    

    const [destination, setDestination] = useState({
        from: '',
        to: ''
    })

    const handleBlur = (e) => {
        const newDestinationInfo = { ...destination }
        newDestinationInfo[e.target.name] = e.target.value;
        setDestination(newDestinationInfo);
    }

    return (
        <div className="container ">
            <div className="row m-3">
                <div className="col-md-4 mt-3 col-sm-12">
                    <div className="card bg-secondary shadow text-white" style={{ width: '20rem', height: '21rem' }}>
                        <form className="p-3">
                            <label class="p-3">From</label>
                            <input type="text" onBlur={handleBlur} class="form-control" id="from" placeholder="Enter your location" required></input>
                            <label className="p-3">To</label>
                            <input type="text" onBlur={handleBlur} class="form-control" id="to" placeholder="Enter your destination" required></input>
                            <button  className="btn btn-success w-100 mt-2" onClick={()=>handleTransportInfo(id,transportName)}>Search</button>
                        </form>
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

export default Destination;