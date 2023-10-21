import styled from "styled-components";

import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from 'prop-types'; // Import PropTypes


const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
`

function ProtectedRoute({children}){
    const navigate = useNavigate();

    //1) Load the authenticated user
    const {isLoading, isAuthenticated} = useUser();


    
        useEffect(function(){
            if(!isAuthenticated && !isLoading) navigate("/login");
    
        },[isLoading,isAuthenticated,navigate])

    //2) while loading show a spinner
    if(isLoading ) return <FullPage><Spinner/></FullPage>


    //3) if no authenticated user redirect to the login page
    //navigate is not allowed to call on topp componments to use useEffect    


    //4) if user render the app
   if(isAuthenticated) return children;

}
ProtectedRoute.propTypes = {
    children: PropTypes.node, // Validate that children is a node
  };
export default ProtectedRoute;