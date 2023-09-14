"use client"
import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {EffectFade, Autoplay, Navigation, Pagination} from "swiper"
import "swiper/css/bundle"

import { BsPlayCircle } from 'react-icons/bs';


export default function Slider({results}) {
    SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    results && (
        <>
       <Swiper slidesPerView={1} navigation pagination={{type: "progressbar"}} effect="fade" modules={[EffectFade]} autoplay={{delay: 5000}}>
       {results.map(({data, id})=>(
            <SwiperSlide key={id} onClick={()=>navigate(`/category/${data.type}/${id}`)}>
                <div style={{background: `url(${data.imgUrls[0]}) center, no-repeat`, backgroundSize: "cover",}} className=' relative w-full h-[300px] overflow-hidden'>

                </div>
                
                <div className="p-2">
                    <h2 className='truncate text-lg font-bold mt-2'>{data.title || data.name}</h2>
                    <p className='line-clamp-2 text-md my-5'>{data.overview}</p>

                    <button type='button' className='flex items-center'>
                        <BsPlayCircle/>
                        Watch Trailer
                    </button>

                </div>

            </SwiperSlide>
        ))}
       </Swiper>
    </>
    )
  )
}
