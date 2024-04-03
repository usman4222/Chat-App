import React, { useState } from 'react';
import { IoChatbubbles } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import AppLayout from '../components/layout/AppLayout';
import Header from '../components/layout/Header';

const Home = () => {
  const [activeChat, setActiveChat] = useState(null);

  const chats = [
    { id: 1, name: "John Smith", message: "Hello!", time: "10:00 AM", notification: "2" },
    { id: 2, name: "Emily Johnson", message: "Hi there!", time: "11:00 AM", notification: "1" },
    { id: 3, name: "Michael Brown", message: "How are you?", time: "12:00 PM", notification: "0" },
    { id: 4, name: "Jessica Martinez", message: "Hello!", time: "1:00 PM", notification: "4" },
    { id: 5, name: "Christopher Lee", message: "How are you?", time: "2:00 PM", notification: "8" },
    // { id: 6, name: "Michael Brown", message: "Hello!", time: "12:00 PM", notification: "3" }
  ];

  const handleChatClick = (chatId) => {
    setActiveChat(chatId);
  };

  return (
    <div>
      <div className=" relative">
        <img src="/src/assets/chat1.png" alt="Background" className="hidden md:hidden lg:block bg-cover bg-no-repeat  relative" />
        <div className=" text-white lg:absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center overflow-hidden">
          <div className="relative">
            <div className='bg-white h-[100vh] rounded-xl'>
              <div>
                <Header/>
                <main className='flex h-[600px] '>
                  <div className='pl-5 pr-5 border-r pt-2 lg:block hidden'>
                    <div>
                      <div className="relative">
                        <input type="search" name="" id="" className='pl-8 pr-20 py-2 border text-gray-400 focus:ring-0 focus:outline-none rounded-md' placeholder='Search' />
                        <svg className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#FFA429]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 3a6 6 0 015.121 8.783l5.82 5.82-1.414 1.414-5.82-5.82A6 6 0 119 3zm0 2a4 4 0 100 8 4 4 0 000-8z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="sidebar p-4 bg-white mt-5" style={{ maxHeight: '450px', overflowY: 'auto' }}>
                      {chats.map(chat => (
                        <div
                          key={chat.id}
                          className={`chat flex flex-col p-2 cursor-pointer rounded-md ${activeChat === chat.id ? 'bg-[#FFA429] text-white' : 'text-[#414042]'
                            }`}
                          onClick={() => handleChatClick(chat.id)}
                        >
                          <div className="flex items-center">
                            <img src={`user${chat.id}.jpg`} alt="sd" className="w-10 bg-slate-300 h-10 rounded-full mr-2" />
                            <div className="details flex-grow">
                              <div className=' flex justify-between'>
                                <div className="name font-bold" style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{chat.name}</div>
                                <div className={`notification bg-[#FFA429] text-center h-[15px] w-[15px] rounded-3xl flex justify-center items-center ${activeChat === chat.id ? 'bg-[#ffffff] text-[#FFA429]' : 'text-[#fff]'} `} style={{ fontSize: "8px" }}>
                                  <div>{chat.notification}</div>
                                </div>
                              </div>
                              <div className="message text-sm">{chat.message}</div>
                            </div>
                          </div>
                          <div className="flex justify-end items-end mt-auto">
                            <div className="time text-sm pr-2">{chat.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='lg:w-[47%] border-r md:w-[65%] w-[100%]'>
                    <div className='sidebar px-7 pb-10' style={{ maxHeight: '520px', overflowY: 'auto' }}>
                      <div className='flex gap-4 mt-10 justify-start'>
                        <div><img src="" alt="sd" className="w-10 bg-slate-300 h-10 rounded-full mr-2" /></div>
                        <div className='bg-[#F7F7F7] text-[#414042] px-4 py-2 rounded-3xl line-clamp-10'><span>Hi, How are you?</span></div>
                      </div>
                      <div className='flex gap-4 mt-10 justify-end'>
                        <div className='bg-[#18D39E] text-[#fff] px-4 py-2 rounded-3xl line-clamp-10'><span>Hi, How are you? What are you in now a days?</span></div>
                        <div><img src="" alt="sd" className="w-10 bg-slate-300 h-10 rounded-full mr-2" /></div>
                      </div>
                      <div className='flex gap-4 mt-10 justify-start'>
                        <div><img src="" alt="sd" className="w-10 bg-slate-300 h-10 rounded-full mr-2" /></div>
                        <div className='bg-[#F7F7F7] text-[#414042] px-4 py-2 rounded-3xl line-clamp-10'><span>What are you in now a days?</span></div>
                      </div>
                      <div className='flex gap-4 mt-10 justify-end'>
                        <div className='bg-[#18D39E] text-[#fff] px-4 py-2 rounded-3xl line-clamp-10'><span>Hi, How are you?</span></div>
                        <div><img src="" alt="sd" className="w-10 bg-slate-300 h-10 rounded-full mr-2" /></div>
                      </div>
                      <div className='flex gap-4 mt-10 justify-start'>
                        <div><img src="" alt="sd" className="w-10 bg-slate-300 h-10 rounded-full mr-2" /></div>
                        <div className='bg-[#F7F7F7] text-[#414042] px-4 py-2 rounded-3xl line-clamp-10'><span>Hi, How are you and who you are?</span></div>
                      </div>
                      <div className='flex gap-4 mt-10 justify-start'>
                        <div><img src="" alt="sd" className="w-10 bg-slate-300 h-10 rounded-full mr-2" /></div>
                        <div className='bg-[#F7F7F7] text-[#414042] px-4 py-2 rounded-3xl line-clamp-10'><span>Hi, How are you and who you are?</span></div>
                      </div>
                      {/* <div className='flex gap-4 mt-10 justify-start'>
                        <div><img src="" alt="sd" className="w-10 bg-slate-300 h-10 rounded-full mr-2" /></div>
                        <div className='bg-[#F7F7F7] text-[#414042] px-4 py-2 rounded-3xl line-clamp-10'><span>Hi, How are you and who you are?</span></div>
                      </div>
                      <div className='flex gap-4 mt-10 justify-start'>
                        <div><img src="" alt="sd" className="w-10 bg-slate-300 h-10 rounded-full mr-2" /></div>
                        <div className='bg-[#F7F7F7] text-[#414042] px-4 py-2 rounded-3xl line-clamp-10'><span>Hi, How are you and who you are?</span></div>
                      </div>
                      <div className='flex gap-4 mt-10 justify-start'>
                        <div><img src="" alt="sd" className="w-10 bg-slate-300 h-10 rounded-full mr-2" /></div>
                        <div className='bg-[#F7F7F7] text-[#414042] px-4 py-2 rounded-3xl line-clamp-10'><span>Hi, How are you and who you are?</span></div>
                      </div> */}
                    </div>
                  </div>
                  <div className='md:block hidden'>
                    <div className='flex justify-center items-center px-20 mt-10'>
                      <img src="" alt="sd" className="w-32 bg-slate-300 h-32 rounded-full mr-2" />
                    </div>
                    <div>
                      <h5 className='text-[#414042] text-center pt-5 font-bold'>Michael Brown</h5>
                      <div className="flex items-center justify-center">
                        <span className="h-2 w-2 bg-[#18D39E] rounded-full mr-2"></span>
                        <p className='text-gray-400 text-center'>Active</p>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppLayout()(Home);
