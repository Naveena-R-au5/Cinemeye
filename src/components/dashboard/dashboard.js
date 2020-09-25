import React from 'react';
import Navbar from '../dashboardnav/nav'
import style from './dashboard.module.css'
import Carousel from 'react-bootstrap/Carousel'
import logo from '../../logo.png'
import i from '../../i.jpg'
import b from '../../b.jpg'
import c from '../../c.jpg'
import List from '../list/list'
import List2 from '../list/list2'


const Dashboard=()=>{
  return(
    <div>
      <Navbar/>
      <div className={style.main}>
        <div className={style.sidenav}>
          <h4 className={style.h4}>Categories</h4>
          <h5 className={style.h5}><i class="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;Main page</h5>
          <h5 className={style.h5}><i class="fa fa-television" aria-hidden="true"></i>&nbsp;&nbsp;TV channel</h5>
          <h5 className={style.h5}><i class="fa fa-film" aria-hidden="true"></i>&nbsp;&nbsp;Movies</h5>
          <h5 className={style.h5}><i class="fa fa-laptop" aria-hidden="true"></i>&nbsp;&nbsp;TV series</h5>
          <h5 className={style.h5}><i class="fa fa-contao" aria-hidden="true"></i>&nbsp;&nbsp;Concerts</h5>
          <h5 className={style.h5}><i class="fa fa-gamepad" aria-hidden="true"></i>&nbsp;&nbsp;Sports</h5>
          <h5 className={style.h5}><i class="fa fa-child" aria-hidden="true"></i>&nbsp;&nbsp;For Kids</h5>
          <h5 className={style.h5}><i class="fa fa-heart" aria-hidden="true"></i>&nbsp;&nbsp;Favourites</h5>
          <h5 className={style.h5}><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;Personal data</h5>
          <div className={style.last}>
            <div><p>Also Follow us in</p></div>
           <div className={style.social}>
           &nbsp;&nbsp;&nbsp;&nbsp; <i class="fa fa-apple" aria-hidden="true"></i>&nbsp;&nbsp;
          <i class="fa fa-facebook" aria-hidden="true"></i>
          </div> 
          </div>

        </div>
        <div className={style.main2}>
        <div className={style.content}>
  <Carousel className={style.item}>
  <Carousel.Item className={style.item}>
    {/* <div className={style.im}> */}
    <img
      className={style.im}
      src={i}
      alt="First slide"
    />
    {/* </div> */}
    <Carousel.Caption className={style.cap}>
      <p className={style.p}>Action | Drama | Movie | Adventure</p>
      <h3>Interstellar</h3>
      <div className={style.bu}><p className={style.b}><i class="fa fa-play-circle" aria-hidden="true"></i>&nbsp;&nbsp;Web trailer</p><p className={style.b}><i class="fa fa-star" aria-hidden="true"></i>&nbsp;&nbsp;Add to favourite</p></div>
      <p className={style.p}>In the future, where Earth is becoming uninhabitable, farmer and ex-NASA pilot Cooper is asked to pilot a spacecraft along with a team of researchers to find a new planet for humans.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className={style.im2}
      src={b}
      alt="Third slide"
    />

    <Carousel.Caption className={style.cap} style={{marginTop:'20px'}}>
    <p className={style.p}>Action | Drama | Movie | Adventure</p>
      <h3>Black Widow</h3>
      <div className={style.bu}><p className={style.b}><i class="fa fa-play-circle" aria-hidden="true"></i>&nbsp;&nbsp;Web trailer</p><p className={style.b}><i class="fa fa-star" aria-hidden="true"></i>&nbsp;&nbsp;Add to favourite</p></div>
      <p className={style.p}>At birth the Black Widow (aka Natasha Romanova) is given to the KGB, which grooms her to become its ultimate operative. When the U.S.S.R. breaks up, the government tries to kill her as the action moves to present-day New York, where she is a freelance operative.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className={style.im2}
      src={c}
      alt="Third slide"
    />

<Carousel.Caption className={style.cap} style={{marginTop:'20px'}}>
    <p className={style.p}>Action | Drama | Movie | Adventure</p>
      <h3>Captain America: The First Avenger</h3>
      <div className={style.bu}><p className={style.b}><i class="fa fa-play-circle" aria-hidden="true"></i>&nbsp;&nbsp;Web trailer</p><p className={style.b}><i class="fa fa-star" aria-hidden="true"></i>&nbsp;&nbsp;Add to favourite</p></div>
      <p className={style.p}>During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body. He must now battle a secret Nazi organisation headed by Johann Schmidt to defend his nation.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
        <div>
        <List/>
        </div>
        <div>
        <List2/>
        </div>
        </div>
        
      </div>
    </div>
  )
}
export default Dashboard
