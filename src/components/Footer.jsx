import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
      <div className=' jusity-self-end flex flex-col text-white bg-[#121212] borderu border-t-2  items-end w-[100%] '>
        <div className='w-[100px] flex justify-center mt-2'><a className='inline-block' href="https:/x.com/selfharmlol" target='_blank'><img className="w-12"src='icons/X.svg'></img></a></div>
        <div className='w-[100px] flex justify-center mt-2'><a className='inline-block' href="https://www.linkedin.com/in/joshua-balaiche" target='_blank'><img src='icons/Linkedin.svg' className='w-7'></img></a></div>
        <div className='w-auto flex justify-center mt-2 mb-2 mr-2'>made with fun in mind!</div>
      </div>
  )

};
export default Footer;