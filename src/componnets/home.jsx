import React, { useState } from 'react'
import Spinner from './spinner'
import Hackalert from './Hackalert'

const Home = () => {
    const [msg, setMsg] = useState([])
    const [name, setName] = useState('')
    const [hasFunctionRun, setHasFunctionRun] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [hacked, setHacked] = useState({
        hack: false,
        loading: false
    })
    const handleChange = (e) => {
        setName(e.target.value)

    }



    let hack = [
        "Initilizing Hacking Tools",
        "Connecting To The Instagram Server..",
        "Connecting To Server 1.....",
        "Connection Failed Retyring",
        "Cennecting Successfully////",
        `${name}`,
        "Fetched User Name...",
        "Fetching Hacking Modules....",
        "Connecting to moddules....trying...",
        "Modules intilizing cracking tool...",
        "Password Matching..........",
        "Failed............retrying",
        "Server Error............",
        "Connecting Server 2..",
        "Loading........................",
        "Matched Found...Please wait.......",

    ]
    const searching = () => {
        if (!hasFunctionRun) {

            let index = 0;
            const intervalId = setInterval(() => {
                setMsg((prevMsg) => [hack[index], ...prevMsg]);
                index++;

                if (index === hack.length) {
                    setMsg([])
                    clearInterval(intervalId);
                    setHacked({
                        loading: true,

                    })
                    setTimeout(() => {
                        setHacked({ hack: true })
                    }, 5000);
                }
            }, 1000)
            setHasFunctionRun(true)
            setIsButtonClicked(true);

        }
    }

    return (
        <>
            <div className="container">
                <div className="img_containter">
                    <img src="/image/img.gif" alt="" />
                </div>
                <div className="content">
                    <div className='result'>{msg.map((message, index) => {

                        return (
                            <>
                                <p key={index}>{message}</p>
                            </>
                        )
                    })}
                        {hacked.hack && <Hackalert username={name} />}
                    </div>

                    {hacked.loading && <Spinner />}


                    <input  disabled={isButtonClicked} type="text" placeholder='Enter Username' value={name} name='name' onChange={handleChange} />
                    <button onClick={name ? searching : null} className='btn'>Enter</button>
                </div>
            </div>

        </>
    )
}

export default Home
