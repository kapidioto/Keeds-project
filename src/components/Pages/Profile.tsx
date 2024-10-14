'use client'
import React from 'react'
import {useEffect, useState} from 'react'

import GetRewardButton from '../GetRewardButton'

import sleepers from '../../assets/img/sleepers1.png'
import ComingSoon from './ComingSoon'
import WebApp from '@twa-dev/sdk'
// import MongoService from '../../MongoService'

declare global {
    interface Window {
        Telegram: {
            WebApp: any;
        }
    }
}

interface IUserData{
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean;
}

const Profile = () => {
    const [UserData, setUserData] = useState<IUserData | null>(null)

    useEffect(()=>{

        if(WebApp.initDataUnsafe.user){
            setUserData(WebApp.initDataUnsafe.user as IUserData)
        }
    },[])

    return(
        UserData ?(
            <div className='content-page'>
                <div className='user-name'>
                    <p>{UserData.username?UserData.username:UserData.first_name}</p>
                </div>
                <div className='nft-holder'>
                    <img src={sleepers}/>
                </div>
                <div className='stats'>
                    <p>props</p>
                    <div className='stats-container'>
                        <div className='ballance'>
                            <p>ballance</p>
                            <p>1000PO</p>
                        </div>
                        <div className='position'>
                            <p>position</p>
                            <p>999pl</p>
                        </div>
                    </div>
                </div>
                <GetRewardButton/>
            </div>
        ) : (
            <ComingSoon/>
        )
    )
}

export default Profile