import { Button } from '@mui/material';
import React from 'react'
import { BiSolidMessageSquareError } from "react-icons/bi";

const NotFound = () => {

    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <div>
                <div className='flex justify-center items-center py-5'>
                    <BiSolidMessageSquareError className='text-6xl text-[#FFA429]' />
                </div>
                <p className='text-center text-[#FFA429] font-bold text-3xl'>Page Not Found !</p>
                <div className='flex justify-center items-center py-5'>
                    <Button variant="contained" href="/" style={{ backgroundColor: '#FFA429', color: 'white' }}>
                        Back to Home
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default NotFound
