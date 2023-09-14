import React from 'react'
import { AiFillYoutube } from 'react-icons/ai';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='p-10'>

      <div className="flex justify-center my-5">
        <FaFacebookSquare className="text-3xl mx-5" />
        <FaInstagram className="text-3xl mx-5" />
        <FaTwitter className="text-3xl mx-5" />
        <AiFillYoutube className="text-3xl mx-5" />
      </div>

      <div className="flex justify-center my-5">
        <p className='mx-5'>Conditions of Use</p>

        <p className='mx-5'>Privacy & Policy</p>

        <p className='mx-5'>Press Room</p>
      </div>

      <div className="flex justify-center">
        <p>© 2023 MovieFlix by Harrison Itotia</p>
      </div>

    </div>
  )
}
