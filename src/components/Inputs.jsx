import React, { useState } from 'react'
import { UilSearch,  UilLocationPoint } from '@iconscout/react-unicons'
import { toast } from 'react-toastify'

function Inputs({setQuery, units, setUnits}) {

    const [city, setCity] = useState('')

    const handleSearchClick = () => {
        if (city !== '') setQuery({q: city})
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {

            toast.info('Fetching users location.')

            navigator.geolocation.getCurrentPosition((position) => {

                toast.success('Location fetched!')

                let lat = position.coords.latitude
                let lon = position.coords.longitude

                setQuery({lat, lon})
            })          
        }
    }

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name

        if (units !== selectedUnit) setUnits(selectedUnit)
    }

  return (
    <div className='grid lg:grid-cols-12 my-6'>
        <div className='grid lg:grid-cols-12 col-span-10 items-center space-x-2'>
            <input 
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="text" 
            placeholder='Search for City...'
            className='col-span-9 text-lg font-light w-full p-2 shadow-xl focus:outline-none capitalize placeholder:lowercase' />
            <UilSearch size={25} className='col-span-1 my-2 text-white cursor-pointer transition ease-out hover:scale-125' onClick={handleSearchClick}/>
            <UilLocationPoint size={25} className='col-span-1 my-2 text-white cursor-pointer transition ease-out hover:scale-125' onClick={handleLocationClick}/>
        </div>
        <div className='grid lg:grid-cols-12 col-span-2 items-center justify-center'>
            <button name='metric' className='col-span-4 text-xl text-white font-light transition ease-out hover:scale-125' onClick={handleUnitsChange}>
                °C
            </button>
            <p className='col-span-4 text-xl text-white mx-auto'>|</p>
            <button name='imperial' className='col-span-4 text-xl text-white font-light transition ease-out hover:scale-125' onClick={handleUnitsChange}>
                °F
            </button>
        </div>

    </div>
  )
}

export default Inputs