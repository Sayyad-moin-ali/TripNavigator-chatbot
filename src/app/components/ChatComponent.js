"use client"
import React from 'react'
import Chatbot from 'react-chatbot-kit'
import  'react-chatbot-kit/build/main.css'
import config from '../config'
import ActionProvider from '../ActionProvider'
import MessageParser from '../MessageParser'

const ChatComponent = () => {
  return (
    <div className='bg-slate-600  flex flex-col  justify-center items-center h-fit py-6'>
      <div className='bg-white lg:text-xl  text-black px-5 py-1 mb-2 rounded-md lg:w-[55%] w-[90%]'><h1>
      TripNavigator is an AI-powered chatbot that helps with personalized travel recommendations, Trips planning, and essential travel tips!</h1></div>
      <Chatbot
      config={config}
      actionProvider={ActionProvider}
      messageParser={MessageParser}
      />;
    </div>
  )
}

export default ChatComponent