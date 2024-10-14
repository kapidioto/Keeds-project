import React from 'react'
import allert from '../../assets/engine-warning-svgrepo-com.svg'

const ComingSoon = () => {
    return(
        <div className='content-page'>
            <div className='message-container'>
                <div className='nft-holder'>
                    <img src={allert}/>
                </div>
                <div className='stats'>
                    <p>Woops...<br/>Source not awailable now(</p>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon