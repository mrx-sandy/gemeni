import { createContext, useState } from "react";
import run from "../config/gemeni";
export const Context = createContext();
const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setprevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {


setResultData("")
setLoading(true);
setShowResult(true);

 const response =   await run(input);
 setResultData(response)
 setLoading(false);
 setInput("")
  };

  const contextValue = {
    prevPrompt,
    setprevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    setInput,
    input,
    resultData,
    loading,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
