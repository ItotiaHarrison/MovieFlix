"use client";

import React, { useEffect, useState } from 'react'
import { MdLightMode } from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

export default function DarkModeSwitch() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const currentTheme = theme === 'system' ? systemTheme : theme;
    return (
        <>
            {mounted && (currentTheme === 'dark' ? <MdLightMode className='text-xl mx-2 cursor-pointer hover:text-amber-500' onClick={() => setTheme("light")}/> : <BsFillMoonFill className='text-xl cursor-pointer mx-2 hover:text-amber-500' onClick={() => setTheme("dark")}/> )}
        </>
    )
}

