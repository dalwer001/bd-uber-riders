import React from 'react';
import { useHistory } from 'react-router';

const Card = (props) => {
    const { transportImage, transportName, transportDescription,id } = props.transport;
    const history = useHistory();
    const handleDestination = () =>{
        history.push(`/destination/${transportName}/${id}`);
    }
    return (
        <div className="container mx-auto" onClick={handleDestination} style={{cursor:'pointer'}}>
            <div className="card m-5" style={{ width: '17rem', height: "33rem" }}>
                <img src={transportImage} alt="" className="card-img-top w-75 h-50 p-3 mx-auto " />
                <div className="card-body">
                    <h5 class="card-title">{transportName}</h5>
                    <p>{transportDescription}</p>
                    <button className="btn btn-success w-100">Take Ride</button>
                </div>
            </div>


        </div>
    );
};

export default Card;