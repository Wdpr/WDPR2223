import React from 'react'
import { Label } from 'reactstrap';
import TheaterDeBinding3 from '../../assets/TheaterDeBinding3';

export const Header = () => {
    return (
        <form>

            <div>
                <label className='label-1'>
                    voer de naam van de voorstelling in
                </label>
                <input className='input-1' type='text' placeholder='voortselling naam'></input>
            </div>
            <div>
                <label className='label-2'>
                    voer de naam van de voorstelling in
                </label>
                <input className='input-2' type='text' placeholder=''></input>
            </div>
            <div>
                <label className='label-3'>
                    voer de naam van de voorstelling in
                </label>
                <input className='input-3' type='text' placeholder='voortselling naam'></input>
            </div>
            <div>
                <label className='label-4'>
                    voer de naam van de voorstelling in
                </label>
                <input className='input-4' type='text' placeholder='voortselling naam'></input>
            </div>
            <div>
                <button className='button-sumbitting' type='submit'></button>
            </div>
        </form>

    )
}