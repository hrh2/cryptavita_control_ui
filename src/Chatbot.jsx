import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { IoIosSend } from "react-icons/io";

const server= 'https://cryptavita-ai.onrender.com'; // Replace with your server URL
const socket = io(server);

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(true); // Initially set loading to true
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Initially set loading to true
    setLoading(true);

    // Emit 'generateContent' event with an empty string on mount
    socket.emit('generateContent', '');

    socket.on('generatedContent', (message) => {
      setMessages(prevMessages => [...prevMessages, message]);
      scrollToBottom();
      setLoading(false); // Stop the loader when response is received
    });

    // Show prompt with an empty string
    setInputValue('');

    return () => {
      socket.off('generatedContent');
    };
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages change
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages(prevMessages => [...prevMessages, { text: inputValue, sentByUser: true }]);
      setLoading(true); // Start the loader while waiting for response
      socket.emit('generateContent', inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="flex flex-col md:h-[90vh] h-[85vh] p-4 justify-between">
      <div className="flex-1 relative md:w-[90%] sm:w-[80%] w-[98%] h-[60%] mx-auto  bg-gray-100 p-4  rounded-md">
        <div className='max-h-[90%] overflow-y-scroll p-4'>
          {messages.map((message, index) => (
            <div key={index} className={message.sentByUser ? "text-right mb-2" : "text-left mb-2"}>
              {message.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        {loading && <div className=" text-center mt-4">...</div>}
        <div className="bg-gray-200 absolute bottom-4 !w-[80%]  p-4 flex items-center rounded-md">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded w-[80%] px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          <button>
            <IoIosSend size={45} onClick={handleSendMessage} className="p-2  text-blue-500 rounded focus:outline-none hover:text-blue-600 active:scale-110" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
