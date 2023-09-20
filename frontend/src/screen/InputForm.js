import React from 'react';
import "../style/inputPage.css";
import Header from '../components/Header';

const InputForm = () => {
  return (
    <>
    <Header/>
    <div className='inputComponents'>
      <form action="#" method='post'>
        <div className="formcontainer">
          <input type="file" placeholder='select file'/>
          <button type='submit'>Browser</button>
        </div>
        <div className="formcontainer">
          <input type="text" placeholder='Author'/>
          <input type="text" placeholder='location'/>
        </div>
        <div className="formcontainer">
          <input type="text" placeholder='Discription'/>
        </div>
        <div className="buttonformcontainer">
          <button className='button' type='submit'>Post</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default InputForm