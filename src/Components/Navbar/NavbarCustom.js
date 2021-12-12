import React, {useEffect, useState} from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavBarElementsCustom';
import {useHistory} from "react-router-dom";
import ReactDOM from 'react-dom';
import {getToken, removeSession} from "../Login/LocalStorageService";



const NavbarCustom = () => {








    const history = useHistory()

    function logout() {
        //alert("Logout Successfully")

        removeSession()

        history.push("/")
    }


    return (
        <>



              <Nav className="flex flex-end">
                <Bars onClick={()=>{
                    if (document.getElementById('List-Nav').hidden){
                        document.getElementById('List-Nav').hidden = false
                    }else{
                        document.getElementById('List-Nav').hidden = true
                    }
                }}/>

                <NavMenu>



                    <NavLink to={'/MarketPlace'}>
                        Market Place
                    </NavLink>
                    <NavLink to='Dashboard'>
                        Dashboard
                    </NavLink>


                    <form className="d-flex h-100">
                        &emsp;
                        <button  className="btn btn-outline-success h-50 my-auto" onClick={logout} type="submit">Logout
                        </button>
                    </form>



                </NavMenu>


            </Nav>

                <nav hidden={true} className="d-md-none d-lg-none w-100 bg-gray-200" id="List-Nav">

                    <ul className="navbar-nav d-inline-block  w-100" >


                        <li className="p-1 bg-gray-200 hover:bg-gray-300">
                            <a href="/Dashboard" className="active d-block">Dashboard</a>
                        </li>
                        <li className="p-1 bg-gray-200 hover:bg-gray-300">
                            <a href="/MarketPlace" className="active d-block">MarketPlace</a>
                        </li>
                        <li className="p-1 bg-gray-200 hover:bg-gray-300">
                            <a onClick={logout} className="active d-block">Log-out</a>
                        </li>

                    </ul>

                </nav>


        </>
    );
};

export default NavbarCustom;
