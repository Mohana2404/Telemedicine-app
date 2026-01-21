import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios";

const Chat = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    const Askquestion = async () => {
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/generate", {
                question: question,
            });
            setAnswer(response.data.answer);
        } catch (error) {
            console.error("Error fetching answer:", error);
            setAnswer("Sorry, there was an error processing your request.");
        }
        setLoading(false);
    }    
  
  return (
    <div>
        <h1>TeleMed Chat</h1>
        <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question..."
        />
        <button onClick={Askquestion} disabled={loading}>
            {loading ? "Loading..." : "Ask"}
        </button>
        <div>
            <h2>Answer:</h2>
            <p>{answer}</p>
        </div>
    </div>
  )
}


export default Chat