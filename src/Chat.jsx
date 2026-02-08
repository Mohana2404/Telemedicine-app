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
            while(true){
            const response = await axios.post("http://localhost:5000/generate", {
                question: question,
            });
            setAnswer(response.data.answer);
            break;
            }
        } catch (error) {
            console.error("Error fetching answer:", error);
            setAnswer("Sorry, there was an error processing your request.");
        }
        setLoading(false);
    }    
  
  return (
    <div className='container mt-5 w-50 p-5 border rounded bg-primary-subtle box-shadow'>
        <h1 className='text-center'>TeleMed Chat</h1>
        <div>
            
                {loading ? <p>Loading...</p> : <div className="container m-3 bg-light border rounded "><i class="bi bi-robot"> </i> {answer}</div>}
            
        </div>
        <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question..."
                className="form-control m-3 "
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        Askquestion();
                    }
                }}
        />
        <button className="btn btn-color m-3" onClick={Askquestion}>Ask</button>  
                
        
        
        
    </div>
  )
}


export default Chat