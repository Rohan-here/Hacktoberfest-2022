import axios from "axios";
import { useState } from "react";

function App() {

  const [result, setResult] = useState(null);
  const [msg, setMsg] = useState("");

  const handleSubmit = () => {
    axios
      .post('http://localhost:8080/classification', { msg })
      .then((res) => {
        const data = res.data.data;
        setResult(data);
      })
      .catch((error) => alert(`Error: ${error.message}`))
  }
  
  return (
    <div className="flex justify-center bg-slate-900 min-h-screen">
      <div>
        <div className="pt-20 text-white font-semibold text-4xl">
          Email/SMS Spam Classifier
        </div>
        <div className="text-left text-white text-sm mt-4">Enter the message:</div>
        <textarea className="bg-slate-700 w-full mt-2 rounded-sm p-1 text-white" onChange={(e) => setMsg(e.target.value)}></textarea>
        <button onClick={() => handleSubmit()} className="bg-slate-900 border-[1px] p-0.5 px-2 rounded-sm mt-2 text-white font-normal hover:bg-white hover:text-[#0f172a]">Predict</button>
        {result && <div className="pt-10 text-white font-semibold text-4xl">{result}</div>}
      </div>
    </div>
  );
}

export default App;
