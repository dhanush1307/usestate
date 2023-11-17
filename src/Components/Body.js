import React, { useState } from 'react'
import Image from '../Image/imgg.jpg'
import ReactPlayer from 'react-player'
const Body = () => {
    const [likes, setLikes] = useState(0) // likes=15
    function count() {
        setLikes(likes + 1);  //(15+1)
    }
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }

    const [fruits, setFruits] = useState([
        { fruit: 'water melon' },
        { fruit: 'apple' },
        {fruit:'mango'}
    ])

    return (
        <div>
            <div style={{display:'flex', justifyContent:'center', alignItems:
        'center', flexDirection : 'column'}}>
                <img src={Image} alt="images" height={'300'}  width={'300'} /> <br />
               <center> <p>RCB are one of the most popular teams in the IPL, having a strong and devoted fan base.<br/>Virat Kohli, the team's most successful batsman, has scored over 6,000 runs.<br/>AB de Villiers, Chris Gayle, and Dinesh Karthik are some of RCB's other noteworthy batters.</p></center>
                <p>likes: {likes}</p>
                {/* destructuring */}
                <button onClick={count}>Like</button>
            </div>
            <div style={{ paddingTop: '50px',display:'flex', justifyContent:'center', alignItems:
        'center', flexDirection: 'column'}}>
                <label htmlFor="Name">Name : </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <p>output : {text}</p>
                <button onClick={reset}>Reset</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {/* pass down url link in url attribuite */}
                <ReactPlayer url={'https://youtu.be/rvQVxVXtc40'} height={200} controls />
                <div>
                    <p>i like this </p>
                </div>
            </div>
        </div>
    )
}
export default Body