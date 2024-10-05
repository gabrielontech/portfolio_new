"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const codeSnippets = [
  `// React Component
const App = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="app">
      {data.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  )
}`,
  `// Flutter Widget
class FlutterApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('My Flutter App'),
        ),
        body: Center(
          child: Text('Hello, World!'),
        ),
      ),
    );
  }
}`,
];

export default function AnimatedCodeEditor() {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const typeCode = useCallback(() => {
    let charIndex = 0;
    const snippet = codeSnippets[currentSnippet];

    const typingInterval = setInterval(() => {
      if (charIndex < snippet.length) {
        setDisplayedCode(snippet.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        setTimeout(() => {
          setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
          setDisplayedCode("");
          setIsTyping(true);
        }, 2000);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [currentSnippet]);

  useEffect(() => {
    if (isTyping) {
      const cleanupTyping = typeCode();
      return cleanupTyping;
    }
  }, [typeCode, isTyping]);

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto bg-gray-900 rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-sm text-gray-400">
          {currentSnippet === 0 ? "React.js" : "Flutter"}
        </div>
      </div>
      <pre className="p-4 text-sm text-green-400 font-mono overflow-x-auto whitespace-pre-wrap">
        <code>{displayedCode}</code>
      </pre>
    </motion.div>
  );
}
