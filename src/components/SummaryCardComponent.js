import React from 'react';
import { Link } from 'react-router-dom';



function SummaryCardComponent() {
  return (
    <div className='w-3/4'>
                        
        <div className="w-full ">
            <div className="border-r border-b border-l border-grey-light 
            justify-between lg:border-l-0 lg:border-t 
            lg:border-grey-light bg-white rounded-b 
            lg:rounded-b-none lg:rounded-r p-4 flex leading-normal">
                
                <div className="company-name flex mb-1 items-center leading-normal gap-10">
                    <div className="border-solid border-b-2 border-indigo-300/75 text-black font-bold text-xl mb-2">Company Name</div>
                    <p className="border-solid border-b-2 border-indigo-300/75 text-grey-darker text-base text-xl mb-2 ml-2">CNA</p>
                </div>

                <div className="company-info ">
                    {/* <img className="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink"/> */}
                    <div className="grid grid-cols-3 text-center text-sm">
                        <div className='text-center px-4 ml-2 border-solid border-2 border-indigo-300/75 rounded'>Volume: 102 million</div>
                        <div className='text-center px-4 ml-2 border-solid border-2 border-indigo-300/75 rounded'>Market Cap: 5</div>
                        <div className='text-center px-4 ml-2 border-solid border-2 border-indigo-300/75 rounded'>Year founded: 1995</div>
                    </div>
                </div>

            </div>
        </div>



        <div className="lg:flex">


            <div className="mx-1 h-40 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
            style={ {backgroundImage: "url("+'https://tailwindcss.com/img/card-left.jpg'+")"} } title="Woman holding a mug">
            </div>

            <div className="mx-1 h-40 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
            style={ {backgroundImage: "url("+'https://tailwindcss.com/img/card-left.jpg'+")"} } title="Woman holding a mug">
            </div>

            <div className="mx-1 h-40 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
            style={ {backgroundImage: "url("+'https://tailwindcss.com/img/card-left.jpg'+")"} } title="Woman holding a mug">
            </div>

            <div className="mx-1 h-40 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
            style={ {backgroundImage: "url("+'https://tailwindcss.com/img/card-left.jpg'+")"} } title="Woman holding a mug">
            </div>

            


            <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-sm text-grey-dark flex items-center">
                        <svg className="text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Members only
                    </p>
                    <div className="text-black font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                    <p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink"/>
                    <div className="text-sm">
                        <p className="text-black leading-none">Jonathan Reinink</p>
                        <p className="text-grey-dark">Aug 18</p>
                    </div>
                </div>
            </div>


        </div>

    </div>
  )
}

export default SummaryCardComponent

