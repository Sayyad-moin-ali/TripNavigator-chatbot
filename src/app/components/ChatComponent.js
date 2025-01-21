"use client"
import React from 'react'
import Chatbot from 'react-chatbot-kit'
import  'react-chatbot-kit/build/main.css'
import config from '../config'
import ActionProvider from '../ActionProvider'
import MessageParser from '../MessageParser'

const ChatComponent = () => {
  return (
    <div className='bg-slate-600  flex flex-col  justify-center items-center h-svh'>
      <div className='bg-white text-lg text-black px-5 py-1 mb-2 rounded-md lg:w-[70%] w-[85%]'><h1>
      TripNavigator is your smart travel buddy that helps you find the best destinations, plan trips, and get weather updates. It even translates phrases to make your travels easier and more enjoyable!</h1></div>
      <Chatbot
      config={config}
      actionProvider={ActionProvider}
      messageParser={MessageParser}
      />;
    </div>
  )
}

export default ChatComponent