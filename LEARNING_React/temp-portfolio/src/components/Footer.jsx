import React from 'react';


function Footer() {
    return (
        <div className="py-5 text-center">
            {/* social icons */}
            <p className='text-sm mt-2 opacity-50'>
                &copy; {new Date().getFullYear()} Pushya Jain. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;