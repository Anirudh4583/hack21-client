
import React, {useState} from "react";
import photo1 from "../Images/404.png"
import photo2 from '../Images/alerte.png'
import photo3 from '../Images/login.png'

function MarketPlace() {


    var database=[


        {
            photo:{photo1},
            Title:'Error Page',
            Filter:'Tailwind',
            Description:'An Tailwind component for 404 page.',
            codeBy:'Lavesh Panghal',
            openSource:false,
            Cost:'0.019 ETH',
            tradable:true,

        },
        {
            photo:{photo2},
            Title:'Remove Card',
            Filter:'Tailwind',
            Description:'A Simple Remove Card in React.',
            codeBy:'Lavesh Panghal',
            openSource:true,
            Cost:'0',
            fundRaised: '0.029 ETH',
            tradable:false,

        },
        {
            photo:{photo3},
            Title:'Form Layout',
            Filter:'Tailwind',
            Description:'A Form Layout Design.',
            codeBy:'Lavesh Panghal',
            openSource:false,
            Cost:'0.059 ETH',
            fundRaised: '0rs',
            tradable:true,

        },
        {
            photo:{photo3},
            Title:'Form Layout',
            Filter:'Tailwind',
            Description:'A Form Layout Design.',
            codeBy:'Lavesh Panghal',
            openSource:true,
            Cost:'0.022 ETH',
            fundRaised: '0rs',
            tradable:false,

        },
        {
            photo:{photo3},
            Title:'Form Layout',
            Filter:'Tailwind',
            Description:'A Form Layout Design.',
            codeBy:'Lavesh Panghal',
            openSource:false,
            Cost:'0.051 ETH',
            fundRaised: '0rs',
            tradable:true,

        },
        {
            photo:{photo3},
            Title:'Form Layout',
            Filter:'Tailwind',
            Description:'A Form Layout Design.',
            codeBy:'Lavesh Panghal',
            openSource:false,
            Cost:'0.059 ETH',
            fundRaised: '0rs',
            tradable:true,

        },
        {
            photo:{photo3},
            Title:'Form Layout',
            Filter:'Tailwind',
            Description:'A Form Layout Design.',
            codeBy:'Lavesh Panghal',
            openSource:true,
            Cost:'0 ETH',
            fundRaised: '0 ETH',
            tradable:false,

        },







    ]












    return (
        <div className="App">

            <div className="w-full bg-white p-12">
                <div className="header flex items-end justify-between mb-12">
                    <div className="title">
                        <p className="text-4xl font-bold text-gray-800 mb-4">
                           Market Place
                        </p>

                    </div>
                    <div className="text-end">
                        <form
                            className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                            <div className=" relative ">
                                <input type="text" id="&quot;form-subscribe-Search"
                                       className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                       placeholder="Enter a title"/>
                            </div>
                            <button
                                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                                type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">


                    {database.map((value,index)=>{


                        return(


                            <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto" key={index}>
                                <a href="#" className="w-full block h-full">
                                    <img alt="blog photo" src={photo1} className="max-h-40 w-full object-cover"/>


                                    <div className="bg-white dark:bg-gray-800 w-full p-4">
                                        <div className='flex flex-row justify-between pb-2'>
                                            {value.openSource?(<p className="text-green-500 text-md font-medium"> Open Source </p>):(<p className="text-indigo-500 text-md font-medium"> Tradable </p>)}
                                            {value.openSource?(<p className="text-green-500 p-0 dark:text-green-500"> {value.fundRaised} </p>):(<p className="text-indigo-500 text-md font-medium"> {value.Cost} </p>)}

                                         </div>

                                        <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                            {value.Title}
                                        </p>
                                        <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                            {value.Description}
                                        </p>

                                        <p className="text-gray-800 pt-4 dark:text-white">
                                            Token Owner - {value.codeBy}
                                        </p>
                                    </div>






                                </a>
                            </div>


                        )



                    })}








                </div>
            </div>


        </div>
    )
}

export default MarketPlace
