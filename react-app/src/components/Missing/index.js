import React from 'react';
import { useEffect } from 'react';
import Loading from '../LoadingScreen';
import "./MissingUser.css";


const MissingUser = () => {
    const [showElement,setShowElement] = React.useState(true)
    useEffect(()=>{
      setTimeout(function() {
        setShowElement(false)
           }, 2000);
         },
      
     [])

    return (
        <>
        {showElement ? (
            <div>
                <Loading></Loading>
            </div>
        ) : (
            <h1 className='missing-header'>User Could Not Be Found</h1>
        )}
        
        </>
    )
}

export default MissingUser;