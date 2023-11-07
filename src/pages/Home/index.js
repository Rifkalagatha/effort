import React, { useEffect, useState } from 'react'
import gta from '../../../src/assets/image/GTAV.jpg'
import genshin from '../../../src/assets/image/genshin.jpg'
import eafc from '../../../src/assets/image/eafc24.jpg'
import hogw from  '../../../src/assets/image/hogwart.jpg'
import miles from  '../../../src/assets/image/miles.jpg'
import fh5 from  '../../../src/assets/image/forza.jpg'
import Loading from '../../helper/loading'

const Home = () => {

    const baseURL = 'https://api.rawg.io/api/';
    const [dataGame , setDataGame] = useState([]);
    const [search, setSearch] = useState('')
    const [size, setsize] = useState(0)
    const [isize, setisize] = useState(0)
    

    const [loading, setLoading] = useState(false)

    const handleKeyPress = (events) => {
        
        if (events.key == 'Enter') {
           setLoading(true)
            fetchData()

        }
    }

    const fetchData = () => {
        fetch( baseURL +"games?key=973b6c0eb5234de19a6c586f3c97ecfd&search=" + search)
        .then(response => response.json())
        .then(json => setDataGame(json.results))
        .finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        setLoading(true)
        fetchData()
    }, [])

  return (
    <div className="App">
      {loading ? (
        <Loading/>
      ) : (
        <>
         <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl min-h-screen ">
        <div className="rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl min-h-screen ">
            <h1 className='text-slate-800 dark:text-white mb-5'><b>LIST GAME</b></h1>
            <label for="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input 
                        type="text" 
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                        onKeyDown={handleKeyPress}
                        value={search? search : ''}
                      
                        id="table-search-users" 
                        className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Search for game"/>
                    </div>
               
          
           
            
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-800">
                    {/* <div>
                        <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Action button</span>
                            Action
                            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                                </li>
                            </ul>
                            <div className="py-1">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                            </div>
                        </div>
                    </div> */}
                    
                </div>
                <div class="table-wrp block " style={{maxHeight : '60vh'}}>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Game
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Genre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ISO File
                            </th>
                            <th scope="col" className="px-6 py-3">
                                After Instalation
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                           
                        </tr>
                    </thead>
                    <tbody>
                                
                        {dataGame.map((data , index) => (
                            <tr key={data.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input 
                                    id="checkbox-table-search-1" 
                                    type="checkbox" 
                                    onClick={(e) => {
                                        if (e.target.checked) {
                                            console.log("masuk")
                                            setsize(size + data.playtime)

                                        } else {
                                            console.log("masuk 2")
                                            setsize(size - data.playtime)


                                        }
                                    
                                    }}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                
                                <img className="w-14 h-10 " src={data.background_image} alt="gta v"/>
                                <div className="pl-3">
                                    <div className="text-base font-semibold">{data.name}</div>
                                    {/* <div className="font-normal text-gray-500"> Playground Games, 9 Nov, 2021</div> */}
                                    <div className="font-normal text-gray-500">{data.released}</div>
                                </div>  
                            </th>
                          
                            <td className="px-6 py-4">
                             {data.genres.map(e => <div>{e.name}</div>)}
                                
                              
                            </td>
                            <td className="px-6 py-4">
                                {data.playtime} GB
                            </td>
                            <td className="px-6 py-4">
                                {(data.playtime + (data.playtime * (25 / 100)))} GB
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
                                </div>
                            </td>
                           
                        </tr>
                            // <tr key={user.id}>
                            //     <td>{user.name}</td>
                            //     <td>{user.email}</td>
                            //     <td>{user.phone}</td>
                            // </tr>
                        ))}
                    
                        {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                
                                <img className="w-10 h-14 " src={fh5} alt="gta v"/>
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Forza Horizon 5 Premium Edition</div>
                                    <div className="font-normal text-gray-500"> Playground Games, 9 Nov, 2021</div>
                                </div>  
                            </th>
                          
                            <td className="px-6 py-4">
                                Action, Arcade, Racing, Simulation, Sports
                            </td>
                            <td className="px-6 py-4">
                                128 GB
                            </td>
                            <td className="px-6 py-4">
                                130 GB
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
                                </div>
                            </td>
                           
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                
                                <img className="w-10 h-14 " src={gta} alt="gta v"/>
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Grand Theft Auto V</div>
                                    <div className="font-normal text-gray-500">Rockstar Games, 14 Apr, 2015</div>
                                </div>  
                            </th>
                          
                            <td className="px-6 py-4">
                                Action, Adventure
                            </td>
                            <td className="px-6 py-4">
                                60 GB
                            </td>
                            <td className="px-6 py-4">
                                107 GB
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
                                </div>
                            </td>
                           
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                
                                <img className="w-10 h-14 " src={genshin} alt="gta v"/>
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Genshin Impact</div>
                                    <div className="font-normal text-gray-500">MiHoYo, 28 Sep, 2020</div>
                                </div>  
                            </th>
                          
                            <td className="px-6 py-4">
                                Action, Adventure
                            </td>
                            <td className="px-6 py-4">
                                -
                            </td>
                            <td className="px-6 py-4">
                                76 GB
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                                </div>
                            </td>
                           
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                
                                <img className="w-10 h-14 " src={hogw} alt="gta v"/>
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Hogwarts Legacy</div>
                                    <div className="font-normal text-gray-500"> Warner Bros. Games, 11 Feb, 2023</div>
                                </div>  
                            </th>
                          
                            <td className="px-6 py-4">
                                Action, Adventure, RPG
                            </td>
                            <td className="px-6 py-4">
                                78 GB
                            </td>
                            <td className="px-6 py-4">
                                80 GB
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
                                </div>
                            </td>
                           
                        </tr>
                        <tr className="bg-white border-green-200 dark:bg-gray-800 dark:border-green-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                
                                <img className="w-10 h-14 " src={miles} alt="gta v"/>
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Spider-Man: Miles Morales</div>
                                    <div className="font-normal text-gray-500"> Insomniac Games, Nixxes Software, 18 Nov, 2022</div>
                                </div>  
                            </th>
                          
                            <td className="px-6 py-4">
                                Action, Adventure
                            </td>
                            <td className="px-6 py-4">
                                37 GB
                            </td>
                            <td className="px-6 py-4">
                                40 GB
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
                                </div>
                            </td>
                           
                        </tr> */}
                {/* <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400"> */}

                       
                        
                     
                       
                    </tbody>
                </table>
                </div>
            </div>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                        {/* <div className="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                        </div> */}
                    </td>
                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                        
                    
                    </th>
                
                    <td className="px-6 py-4">
                        TOTAL :
                    </td>
                    <td className="px-6 py-4">
                    {size} GB
                    </td>
                    <td className="px-6 py-4">
                        {size + (size * ( 25 / 100))} GB
                    </td>
                    <td className="px-6 py-4">
                        <button className='bg-green-200 dark:bg-gray-200 rounded-lg text-sm px-3 py-1.5'>
                            Send Order - Shoppe
                        </button>
                    </td>
                
                </tr>   
            </table>

        </div>
    </div>
        </>
      )}
    </div>
  
    


  )
}

export default Home

