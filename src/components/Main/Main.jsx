import { assets } from "../../assets/assets";
import ContextProvider, { Context } from "../../context/Context";
import "./Main.css";
import { useContext } from "react";
const Main = () => {

const{onSet,recentPrompt,showResult,loading,resultData,setInput,input} =(useContext)


  return (
    <div className="main">
      <div className="nav">
        <div className="greet">Gemeni</div>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-contaner">


       
        <>
        <div className="greet">
          <p>
          
            {" "}
            <span>Hello, Dev</span>{" "}
          </p>
          <p>How can I help you today ?</p>
        </div>
       



        </div>

        <div className="cards">
          <div className="card">
            <p>Suggests beautiful places to see on an upcoming road</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summerize this concept:Urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>

          <div className="card">
            <p>Improving the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>

          <div className="card">
            <p>Suggests beautiful places to see on an upcoming road</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summerize this concept:Urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
        </div>
         </> 
       
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img onClick={() => onSet()} src={assets.send_icon} alt="" />

          </div>
          <p className="bottom-info">
Gemeni may display inaccurate info,including about people,so double-check its responses 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
