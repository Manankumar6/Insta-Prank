import React, { useEffect, useState } from 'react'

const Spinner = () => {
    const [wait_msg,setWait_msg] = useState([])
    useEffect(()=>{
        // eslint-disable-next-line
        let waiting = [
            "loading.....",
            "please wait",
            "fetching instagram server",
            "loading...",
            "please wait a while"
        ]
        let index = 0;
        const waiting_msg = setInterval(() => {
            setWait_msg((premessage)=>[waiting[index]]      )
            index++
            if(index===waiting[index]){
                clearInterval(waiting_msg)
            }
        }, 1000);
        return () => {
            // Cleanup function to clear the interval when the component unmounts
            clearInterval(waiting_msg);
          };
    },[])
  return (
    <div className='loading'>
        <img src="image/1490.gif" alt="loading" className='load_img' />
       {wait_msg.map((msg,ind)=>{
            return(<>
        
            <p key={ind}>{msg}</p>
            </>)
        })}
    </div>
  )
}

export default Spinner
