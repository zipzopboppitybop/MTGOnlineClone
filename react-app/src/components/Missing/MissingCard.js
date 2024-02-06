import React from 'react';
import { useEffect } from 'react';
import Loading from '../LoadingScreen';
import "./MissingUser.css";


const MissingCard = () => {
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
            <div className='loading-deck'>
                <Loading></Loading>
            </div>
        ) : (
            <h1 className='missing-deck-header'>Card(s) Could Not Be Found</h1>
        )}
        
        </>
    )
}

export default MissingCard;