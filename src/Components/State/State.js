import React, { useState } from 'react';
const Task = () => {

    const [format,setFormat] = useState();
    const [limit,setLimit] = useState();

    const handleonChnage = (event) => {
        const text = event.target.value;
        setFormat(text);

        const count = text.length;
        setLimit(count)

    }
    const upperCaseFunc = () => {

        const upCase = format.toUpperCase();
        setFormat(upCase);
    
    }

    const lowerCaseFunc = () => {

        const lowCase = format.toLowerCase();
        setFormat(lowCase);
    
    }

    
    const capCaseFunc = () => {

        const capCase = format.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
        setFormat(capCase);
    }

    const copy = async () => {
        await navigator.clipboard.writeText(format);
        alert('Text copied');
      }

    const timeCount = () => {

        const wordsPerMinute = 240;
        let result;
        let textLength = format.split(" ").length;
        if(textLength > 0){

            let value = Math.ceil(textLength / wordsPerMinute);
            result = `${value} min read`;
        }

        document.getElementById("readingTime").innerText = result;
    }

    const clearCaseFunc = () => {

       setFormat('');
    
    }





     return(
         <>
        <div className="container">
            <div className="form-group">
            <label forHTML="exampleFormControlTextarea1">Enter your Text Here</label>
            <textarea className="form-control" value={format} onChange={handleonChnage} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button onClick={upperCaseFunc} className="btn btn-info m-3">UpperCase</button>
            <button onClick={lowerCaseFunc} className="btn btn-secondary m-4">LowerCase</button>
            <button onClick={capCaseFunc} className="btn btn-danger m-4">Capitalize</button>
            <button onClick={copy} className="btn btn-success m-4">Copy Text</button>
            <button onClick={timeCount} className="btn btn-success m-4">Time Count</button>
            <button onClick={clearCaseFunc} className="btn btn-secondary m-4">Clear</button>
            
            <h1>Count : {limit}</h1>
            <h1 id="readingTime"></h1>
        </div>
      
        </>

     )
}

export default Task

