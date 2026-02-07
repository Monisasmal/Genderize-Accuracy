"use client";

import {useState} from 'react';
import { useRouter } from "next/navigation";

const SearchBox = () => {
const[name,setName] = useState("");
const Router = useRouter();

const handleSearch = () =>{
    if(!name.trim()) return;
    Router.push(`?name=${name}`)
}

  return (
    <div className='mb-6 flex gap-2'>
        <input type='text' 
         placeholder="Enter name"
         value={name}
         onChange={(e) => setName(e.target.value)}
         className='flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
         />
         <button onClick={handleSearch} className='bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700'>Search</button>
    </div>
  )
}

export default SearchBox