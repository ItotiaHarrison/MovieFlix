"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBox() {
    const [search, setSearch] = useState('');

    const router = useRouter();

    function handleSubmit(e){
        e.preventDefault();
        if (!search) return;
        router.push(`/search/${search}`);
    }

    return (
        <form 
        className='flex max-w-xl mx-auto items-center px-5 ' onSubmit={handleSubmit}>
            <input type="text" 
            placeholder='Which movie?...' 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} className='w-full outline h-7 rounded-sm placeholder-gray-500 bg-transparent flex-1' />
            <button disabled={!search} type="submit" className='text-amber-600 disabled:text-gray-400'><AiOutlineSearch/></button>
        </form>
    )
}
