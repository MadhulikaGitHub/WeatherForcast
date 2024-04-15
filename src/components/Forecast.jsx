import React from 'react'
import { iconUrlFromCode } from '../services/weatherService'

function Forecast({ title, items }) {
    return (
        <div>

            <div className='flex items-center justify-start mt-6'>
                <p className='text-white font-medium uppercase'>{title}</p>
            </div>

            <hr className='my-2' />

            <div className='grid grid-cols-1 lg:grid-cols-5 items-center text-white'>

                {items.map((item) => (

                    <div className='flex flex-col items-center justify-center mb-2'>
                        <p className='font-light text-sm'>
                            {item.title}
                        </p>
                        <img
                            src={iconUrlFromCode(item.icon)}
                            alt=""
                            className='w-12 my-1'
                        />
                        <p className='font-medium'>
                        {`${item.temp.toFixed()}°`}
                        </p>
                    </div>

                ))}



                {/* <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:30 PM
                </p>
                <img 
                    src="http://openweathermap.org/img/wn/01d@2x.png" 
                    alt=""
                    className='w-12 my-1'
                    />
                <p className='font-medium'>
                    22°
                </p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:30 PM
                </p>
                <img 
                    src="http://openweathermap.org/img/wn/01d@2x.png" 
                    alt=""
                    className='w-12 my-1'
                    />
                <p className='font-medium'>
                    22°
                </p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:30 PM
                </p>
                <img 
                    src="http://openweathermap.org/img/wn/01d@2x.png" 
                    alt=""
                    className='w-12 my-1'
                    />
                <p className='font-medium'>
                    22°
                </p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:30 PM
                </p>
                <img 
                    src="http://openweathermap.org/img/wn/01d@2x.png" 
                    alt=""
                    className='w-12 my-1'
                    />
                <p className='font-medium'>
                    22°
                </p>
            </div> */}

            </div>

        </div>
    )
}

export default Forecast