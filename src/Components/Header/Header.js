import React, { useContext } from 'react';
import './Header.css'
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";



const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            let signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                password: '',
                photo: '',
                error: '',
                success: false
            }
            setLoggedInUser(signedOutUser);
        })
            .catch((error) => {

            });
    }
    
    return (
        <div>
            <Navbar className="bg-dark" expand="lg">
                <Link to="/home"><h2 className="text-danger text-decoration-none">Bd UBER RIDERS </h2></Link>
                <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end ">
                    <Link to="/home" className="nav-link">Home</Link>
                    <Link to="/destination" className="nav-link">Destination</Link>
                    <Link to="/login" className="nav-link"onClick={handleSignOut}>{loggedInUser.email?'Logout':'Login'}</Link>
                    <Link to="#" className="nav-link active text-danger">{loggedInUser.name||loggedInUser.email}</Link>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;