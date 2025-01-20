"use client"
import React from 'react'
import Chatbot from 'react-chatbot-kit'
import  'react-chatbot-kit/build/main.css'
import config from '../config'
import ActionProvider from '../ActionProvider'
import MessageParser from '../MessageParser'

const ChatComponent = () => {
  return (
    <div className='bg-slate-600  flex  justify-center items-center h-svh'>
      <Chatbot
      config={config}
      actionProvider={ActionProvider}
      messageParser={MessageParser}
      />;
    </div>
  )
}

export default ChatComponent