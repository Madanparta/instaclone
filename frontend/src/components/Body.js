import React from 'react';
import '../style/body.css';
import Posts from '../subComponents/Posts';
import {data} from '../utiles/data';

const Body = () => {
  return (
    <div className="bodyComponents">
        {
            data.map((data,index)=>(
                <Posts key={index} name={data.name} location={data.location} likes={data.likes} description={data.description} PostImage={data.PostImage} date={data.date}/>
            ))
        }
    </div>
  )
}

export default Body