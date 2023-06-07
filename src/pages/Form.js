import React from 'react'
import { useEffect, useContext } from "react";
import { Link, useParams } from 'react-router-dom';
// Context
import ShowsContext from "../context/shows/showsContext";
import Formcom from '../components/Formcom';

const Form = () => {
    const { getSingleShow, singleShow, loading } = useContext(ShowsContext);
    const { id } = useParams();
  
    useEffect(() => {
        
      getSingleShow(id);
      console.log(getSingleShow(id));
  
      // eslint-disable-next-line
    }, []);
  return (
    <div>
      <Formcom values={singleShow.name} />
    </div>
  )
}

export default Form
