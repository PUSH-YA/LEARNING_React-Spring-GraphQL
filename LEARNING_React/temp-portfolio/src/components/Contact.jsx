import React from 'react';
import Title from './Title';

function Contact() {
    return (
        <div className='flex flex-col mb-10 mx-auto'>
            <div className="flex justify-center items-center">
                <form action="https://getform.io/slug"
                    method="POST"
                    className="flex flex-col w-full md:w-10/12"
                    >
                    <Title>Contact</Title>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-1 rounder-md focus:outline-none"
                    />
                    <input 
                        type="text"
                        name="email"
                        placeholder="JohnDoe@mail.com"
                        className="my-2 p-2 bg-transparent border-1 rounder-md focus:outline-none"
                    />
                    <textarea
                        name=""
                        placeholder="Your message"
                        rows="10"   
                        className='p-2 mb-4 bg-transparent border-1 rounded-md focus:outline-none' 
                    >
                    </textarea>
                    <button
                        type="button"
                        className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md 
                        text-white bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                    >
                        Sent Message!
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;