'use client';
import { useState, useEffect, useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { db } from '@/lib/firebase';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, Timestamp } from 'firebase/firestore';

export default function Guestbook({ dragListeners = {} }: { dragListeners?: any }) {
  const [messages, setMessages] = useState<{ id: string; name: string; message: string; timestamp: Timestamp }[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [msgError, setMsgError] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as { id: string; name: string; message: string; timestamp: Timestamp })));
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let hasError = false;

    if (!name.trim()) {
      setNameError(true);
      hasError = true;
    }
    
    if (!message.trim()) {
      setMsgError(true);
      hasError = true;
    }

    if (hasError) return;

    try {
      await addDoc(collection(db, 'messages'), {
        name: name.trim(),
        message: message.trim(),
        timestamp: serverTimestamp(),
      });
      setMessage('');
      
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    } catch (error) {
      console.error('Error adding message: ', error);
    }
  };

  function timeAgo(timestamp: Timestamp | null) {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (seconds < 60) return 'now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  }

  return (
    <div className="w-80 bg-[#A7C7E7] border-2 border-[#304269] p-2 shadow-lg rounded-none crt-screen flex flex-col h-64">
      <div
        className="bg-[#304269] text-white -mx-2 -mt-2 px-2 py-1 mb-2 flex items-center justify-between font-bold text-base cursor-grab shrink-0"
        {...dragListeners}
      >
        <span className="crt-text-glow">Guestbook</span>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto bg-white border border-[#304269] p-1 font-mono text-xs space-y-1 mb-2 scrollbar-thin"
      >
        {messages.map((msg) => (
          <div key={msg.id} className="leading-tight text-sm">
            <span className="float-right text-[10px] text-[#304269] opacity-60 ml-2 mt-0.5">
              {timeAgo(msg.timestamp)}
            </span>
            
            <div className="wrap-break-word">
              <span className="font-bold text-gray-500 mr-1.5">
                {msg.name}
              </span>
              <span className="font-bold text-black">
                {msg.message}
              </span>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-row gap-1 shrink-0">
        <input
          type="text"
          placeholder={nameError ? "Name?" : "Name"}
          value={name}
          maxLength={15}
          onChange={(e) => {
            setName(e.target.value);
            if (nameError) setNameError(false);
          }}
          className={`w-20 p-1 border font-mono text-xs focus:outline-none focus:bg-blue-50 transition-colors
            ${nameError 
              ? "border-red-500 placeholder:text-red-500 bg-red-50" 
              : "border-[#304269] bg-white text-[#304269] placeholder:text-gray-400"
            }`}
        />
        <input
          type="text"
          placeholder={msgError ? "Message?" : "Message..."}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (msgError) setMsgError(false);
          }}
          className={`flex-1 p-1 border font-mono text-xs focus:outline-none focus:bg-blue-50 transition-colors
            ${msgError 
              ? "border-red-500 placeholder:text-red-500 bg-red-50" 
              : "border-[#304269] bg-white text-[#304269] placeholder:text-gray-400"
            }`}
        />
        <button 
          type="submit" 
          className="bg-[#304269] text-white px-3 flex items-center justify-center hover:bg-[#4a6fa5] transition-colors"
        >
          <FaPaperPlane size={10} />
        </button>
      </form>
    </div>
  );
}