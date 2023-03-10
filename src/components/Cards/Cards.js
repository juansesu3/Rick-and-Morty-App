//   ██████╗  ██████╗
//       ██║░██╔════╝
//       ██║░ █████╗
//    ██ ██║░  ╚═══██╗
//    █████║░ ██████╔╝ 
//    ╚════╝ ╚═════╝   ██

import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Cards.module.scss';

const Cards = ({ results, page }) => {

    let display;
    if (results) {

        display = results.map((x) => {
            let { id, name, image, location, status } = x
            return (
                <Link
                style={{textDecoration:"none"}}
                to={`${page}${id}`}
                key={id} className='col-lg-4 col-md-6 col-12 mb-4 position-relative' >
                    <div className={`${styles.cards} d-flex flex-column justify-content-center`} >
                        <img src={image} alt='' className={`img-fluid ${styles.img}`} />
                        <div className='content p-2' >
                            <div className='fs-4 fw-bold mb-4' >{name}</div>
                            <div className='fs-6 text-secondary fw-semibold' >Last location</div>
                            <div className='fs-5 fst-normal' >{location.name}</div>
                        </div>

                    </div>
                    {(() => {
                        if (status === 'Dead') {
                            return (
                                <div className={`${styles.badge} position-absolute badge bg-danger`} >
                                    {status}</div>
                            )
                        }
                        else if (status === 'Alive') {
                            return(
                            <div className={`${styles.badge} position-absolute badge bg-success`} >
                                {status}</div>)
                         }
                        else{
                            return(
                                <div className={`${styles.badge} position-absolute badge bg-secondary`} >
                                    {status}</div>)

                        }
                })()}
                    
                </Link>
                )
        });


    } else {
        display = "No Characters Found :/"

    }
    return <>{display}</>
}

export default Cards