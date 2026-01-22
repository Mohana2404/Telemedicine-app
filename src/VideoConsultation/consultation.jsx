// src/components/VideoConsultation/VideoConsultation.jsx
import React, { useRef, useState, useEffect } from "react";

function VideoConsultation() {
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const [callStarted, setCallStarted] = useState(false);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        localVideoRef.current.srcObject = stream;
        localVideoRef.current.play();
      })
      .catch(err => console.error(err));
  }, []);

  const startCall = () => {
    setCallStarted(true);
    // Here you can integrate WebRTC or SDK later
  };

  const endCall = () => {
    setCallStarted(false);
    // Stop local stream when call ends
    const stream = localVideoRef.current.srcObject;
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
  };

  return (
    <div className="video-container">
      <div className="local-video">
        <video ref={localVideoRef} width="300" height="200" muted />
        <p>Your video</p>
      </div>

      <div className="remote-video">
        <video ref={remoteVideoRef} width="300" height="200" />
        <p>Doctor/Patient video</p>
      </div>

      <div className="controls">
        {!callStarted ? (
          <button onClick={startCall}>Start Call</button>
        ) : (
          <button onClick={endCall}>End Call</button>
        )}
      </div>
    </div>
  );
}

export default VideoConsultation;
