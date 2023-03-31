import React from 'react';

const Course = (props) => {
  let data=props.data
    return (
    <div className="mainBlock">
      <div className='first'>
        <center>
               <img src={data[0].trainerPhoto} alt="picture"/>
               <h1>{data[0].trainerName}</h1>
               <h2>{data[0].courseName}</h2>
               <h2>{data[0].courseDuration}</h2>
               <h3>{data[0].skills}</h3>
        </center>
      </div>
      <div className='second'>
        <center>
      <img src={data[1].trainerPhoto} alt="picture"/>
               <h2>{data[1].courseName}</h2>
               <h1>{data[1].trainerName}</h1>
               <h2>{data[1].courseDuration}</h2>
               <h3>{data[1].skills}</h3>
        </center>
        </div>
        <div className='third'>
        <center>
      <img src={data[2].trainerPhoto} alt="picture"/>
               <h1>{data[2].trainerName}</h1>
               <h2>{data[2].courseName}</h2>
               <h2>{data[2].courseDuration}</h2>
               <h3>{data[2].skills}</h3>
        </center>
        </div>
    </div>
       )   
}

export default Course