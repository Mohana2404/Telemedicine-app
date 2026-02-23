import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";

const ChatMessage = ({ msg }) => {
    const isBot = msg.sender === 'bot';
    const [displayedText, setDisplayedText] = useState(msg.typeEffect ? '' : msg.text);

    useEffect(() => {
        let isMounted = true;
        if (msg.typeEffect) {
            let i = 0;
            setDisplayedText('');
            const timer = setInterval(() => {
                if (isMounted) {
                    setDisplayedText(() => msg.text.substring(0, i + 1));
                    i++;
                    if (i >= msg.text.length) {
                        clearInterval(timer);
                    }
                }
            }, 10);
            return () => {
                isMounted = false;
                clearInterval(timer);
            };
        } else {
            setDisplayedText(msg.text);
        }
    }, [msg.text, msg.typeEffect]);

    return (
        <div className={`d-flex ${isBot ? 'justify-content-start' : 'justify-content-end'} mb-3`}>
            {isBot && (
                <div className="me-2 mt-auto mb-auto">
                    <div className="bg-primary bg-gradient rounded-circle d-flex align-items-center justify-content-center text-white shadow-sm" style={{ width: '40px', height: '40px' }}>
                        <i className="bi bi-robot"></i>
                    </div>
                </div>
            )}
            <div
                className={`p-3 shadow-sm`}
                style={{
                    maxWidth: '80%',
                    backgroundColor: isBot ? '#ffffff' : '#0d6efd',
                    color: isBot ? '#333333' : '#ffffff',
                    borderRadius: '18px',
                    borderBottomLeftRadius: isBot ? '4px' : '18px',
                    borderBottomRightRadius: isBot ? '18px' : '4px',
                    wordWrap: 'break-word',
                    whiteSpace: 'pre-wrap',
                    fontSize: '1rem',
                    lineHeight: '1.5'
                }}
            >
                {displayedText}
                {msg.typeEffect && displayedText.length < msg.text.length && (
                    <span className="border-end border-2 ms-1" style={{ borderColor: 'currentColor', animation: 'blink 1s step-end infinite' }}></span>
                )}
            </div>
        </div>
    );
};

const Chat = () => {
    const [messages, setMessages] = useState([{ sender: 'bot', text: 'Hello! Welcome to TeleMed. How can I assist you with your health queries today?', typeEffect: true }]);
    const [question, setQuestion] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages, loading]);

    const Askquestion = async () => {
        if (!question.trim()) return;

        const userMsg = { sender: 'user', text: question.trim(), typeEffect: false };
        setMessages(prev => [...prev, userMsg]);
        setQuestion("");
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:5000/generate", {
                question: userMsg.text,
            });
            setMessages(prev => [...prev, { sender: 'bot', text: response.data.answer, typeEffect: true }]);
        } catch (error) {
            console.error("Error fetching answer:", error);
            setMessages(prev => [...prev, { sender: 'bot', text: "Sorry, there was an error processing your request.", typeEffect: true }]);
        }
        setLoading(false);
    };

    return (
        <div className="container-fluid py-4" style={{ backgroundColor: '#e2e8f0', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <style>
                {`
                @keyframes blink { 50% { opacity: 0; } }
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,0.2); border-radius: 10px; }
                .typing-dot {
                    animation: typing 1.4s infinite ease-in-out both;
                    height: 8px; width: 8px; border-radius: 50%;
                    background-color: #0d6efd; display: inline-block; margin: 0 2px;
                }
                .typing-dot:nth-child(1) { animation-delay: -0.32s; }
                .typing-dot:nth-child(2) { animation-delay: -0.16s; }
                @keyframes typing {
                    0%, 80%, 100% { transform: scale(0); }
                    40% { transform: scale(1); }
                }
                `}
            </style>

            <div className="card shadow-lg border-0 d-flex flex-column" style={{ width: '100%', maxWidth: '900px', height: '85vh', borderRadius: '20px', overflow: 'hidden' }}>
                <div className="card-header bg-primary bg-gradient text-white p-4 d-flex align-items-center border-0 z-1">
                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                        <i className="bi bi-robot text-primary fs-3"></i>
                    </div>
                    <div>
                        <h4 className="mb-0 fw-bold">TeleMed AI Assistant</h4>
                        <small className="text-white-50"><i className="bi bi-circle-fill text-success" style={{ fontSize: '8px' }}></i> Online & ready to help</small>
                    </div>
                </div>

                <div className="card-body custom-scrollbar" style={{ overflowY: 'auto', flexGrow: 1, padding: '30px', backgroundColor: '#f8fafc' }}>
                    {messages.map((msg, index) => (
                        <ChatMessage key={index} msg={msg} />
                    ))}
                    {loading && (
                        <div className="d-flex justify-content-start mb-3">
                            <div className="me-2 mt-auto mb-auto">
                                <div className="bg-primary bg-gradient rounded-circle d-flex align-items-center justify-content-center text-white shadow-sm" style={{ width: '40px', height: '40px' }}>
                                    <i className="bi bi-robot"></i>
                                </div>
                            </div>
                            <div className="p-3 shadow-sm bg-white" style={{ borderRadius: '18px', borderBottomLeftRadius: '4px' }}>
                                <div className="d-flex align-items-center h-100" style={{ minHeight: '24px' }}>
                                    <span className="typing-dot"></span>
                                    <span className="typing-dot"></span>
                                    <span className="typing-dot"></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="card-footer bg-white p-3 border-top-0 z-1">
                    <div className="input-group input-group-lg rounded-pill p-1 bg-light border transition-all">
                        <textarea
                            className="form-control bg-transparent border-0 shadow-none ps-4 placeholder-secondary py-2"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Type your question..."
                            style={{ resize: 'none', maxHeight: '120px', fontSize: '1rem' }}
                            rows="1"
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    Askquestion();
                                }
                            }}
                        />
                        <button
                            className={`btn btn-primary rounded-circle m-1 d-flex align-items-center justify-content-center shadow-sm ${!question.trim() ? 'opacity-50' : ''}`}
                            style={{ width: '45px', height: '45px', transition: 'all 0.2s' }}
                            onClick={Askquestion}
                            disabled={loading || !question.trim()}
                        >
                            <i className="bi bi-send-fill" style={{ marginLeft: '-2px', fontSize: '1.2rem' }}></i>
                        </button>
                    </div>
                    <div className="text-center mt-2">
                        <small className="text-muted" style={{ fontSize: '0.75rem' }}>AI can make mistakes. Consult a doctor for medical advice.</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;