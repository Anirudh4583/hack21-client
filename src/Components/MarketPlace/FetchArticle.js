
import React, {useEffect, useState} from "react";
import photo1 from "../Images/404.png"
import photo2 from '../Images/alerte.png'
import photo3 from '../Images/login.png'
import {database} from "./Data";
import {useHistory, useParams} from "react-router-dom";
import {data} from "autoprefixer";

function FetchArticle() {

    const [data,setData]=useState();

   const{id}= useParams()
    const history = useHistory()




    useEffect(()=>{
        console.log(database)

            for (var i=0; i < database.length; i++) {
                if (database[i].IpfsDest === id) {
                    console.log(database[i])
                    setData(database[i])
                    return database[i];


                }
            }


    },[])







    const handelMarketClick = (value)=>{



    }


    return (
        <div className="App">
            {data  ? (



                    <section className="font-mono  container mx-auto   bg-back  rounded-3xl  ">
                        {console.log(data.Title)}
                        <div className='flex flex-row justify-around'>
                            <h1 className=" mb-6 text-2xl pt-4 text-left!important font-semibold text-black  lg:text-3xl">{data.Title}</h1>
                          {data.openSource?(  <h1 className="mb-6 text-2xl pt-4 text-left!important font-semibold text-green-400  lg:text-3xl">  Open Source </h1>):(  <h1 className=" mb-6 text-2xl pt-4 text-left!important font-semibold text-indigo-600  lg:text-3xl"> Tradable </h1>)}

                        </div>

                        <div className="flex flex-col  py-8 ">
                            <div className="flex flex-col w-full mb-12 text-left ">
                                <div className="w-full mx-auto lg:w-1/2">
                                    <img className=" rounded rounded border-4 border-purple-200" src={photo1} />

                                    <br/>

                                    <div className='bg-back rounded-3xl  '>
                                        <h2 className="mx-auto pl-2 text-black mt-4 mb-4 text-xl font-semibold text-black"> Description:</h2>
                                        <br/>
                                        <p className="mx-auto pl-2 text-black  font-medium leading-relaxed ">{data.Description}</p></div>
                                    <div className='flex justify-end'>
                                        <p className="  pt-4 text-black  font-bold leading-relaxed "> Token Owner - {data.codeBy}</p>
                                    </div>

                                </div>
                                <br/>

                                <img className="  h-64 absolute top-0 w-64 bg-back" src={"https://cdn-icons-png.flaticon.com/512/2909/2909678.png"}/>
                                <div className="p-4 mt-4 bg-white border rounded-lg w-full mx-auto lg:w-1/2">
                                    <div className="flex py-2 mb-4 w-full">
                                        <div>
                                            <p className="text-lg font-bold tracking-tight text-black cursor-pointer" onClick={()=>{
                                                history.goBack()

                                            }}>Back to MarketPlace</p>
                                            <p className="text-lg font-normal tracking-tight text-gray-600"> </p>
                                        </div>
                                    </div>
                                    <span  className="w-full font-xl inline-block px-4 py-2  cursor-pointer mt-4 text-black transition duration-500 ease-in-out transform bg-blue-500 border-blue-500 rounded-md focus:shadow-outline focus:outline-none hover:bg-blue-700" onClick={()=>{''}}>  {data.openSource?( `Crowd Fund [Current Funding Count ${data.fundRaised}]` ):(`Buy @ ${data.Cost}` )}</span>
                                </div>
                            </div>
                        </div>

                    </section>


                ):
                (

                    <div>

                        <div className=" flex justify-center items-center">
                            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-800 mt-20"> </div>
                        </div>
                    </div>

                )}


        </div>





    )
}

export default FetchArticle
