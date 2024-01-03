'use client'
import React, { useEffect, useState } from "react";

export default function Home() {

  const [coordinates, setCoordinates] = useState(null); 
  const [error, setError] = useState(null); 
  
  const handleGetLocation = () => { 
    navigator.geolocation.getCurrentPosition( 
    ({ coords }) => { 
      setCoordinates(coords); 
      setError(null);
      console.log(coords);
      },
      (error) => { 
        setError(error.message); 
        console.log("Failed to get location!");
      } 
    );
  };

  return (
    <>
    HOME PAGE
    </>
  )
}
