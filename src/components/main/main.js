import React from 'react'
import background from '../../background.png'
import logo from '../../logo.png'
import style from './main.module.css'
import Next from '../next/next'
import Navbar from '../navbar/navbar'


const main=()=>{
    const list = ['Video & Entertaining','Andersenlab','UI/UX']
 
    return(
        <>
       
        <div className={style.respcontainer} style={{marginLeft:0,overflow:'hidden'}}>
            <div>
            <Navbar/>
            <img className={style.iframe} src={background} alt="alt"></img>
            <div className={style.topleft}>
            <div className={style.logo}>
            <h1 className={style.heading}><img src={logo} alt='img' className={style.img}/>&nbsp;&nbsp;Cinemeye</h1>
            </div>  
            <ul className={style.li}>
            {list.map(li=>{
                return(
                    <><li className={style.h}><span className={style.line}></span><span className={style.number}></span>{li}</li ></>
                )
            })}
            </ul>
        </div>
        </div>
     </div>
     <Next/>
     </>  
    
    )
}
export default main;
// width="1448" height="1648"