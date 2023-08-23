import React from 'react'
import './home.css'
import {mock} from './mock'

function Home() {
  return (
    <div>
      <div className="card_item">
        {mock.map((item)=>{
            return(
        <div className="card_box">
            <img className='img' src={item.imh} alt="" />
            <div className="card_text">
                <h3>Enjoy beauty place in Bali city</h3>
                <div className="wiev">
                    <div className="span">
                        <img src={item.icon1} alt="" />
                        <small>{item.day}</small>
                    </div>
                    <div className="span">
                        <img src={item.icon3} alt="" />
                        <small>{item.person}</small>
                    </div>
                    <div className="span">
                        <img src={item.icon2} alt="" />
                        <small>{item.review}</small>
                    </div>
                </div>
                <div className="box_footer">
                <div className="span">
                        <img src={item.icon}alt="" />
                        <small>{item.location}</small>
                    </div>
                    <button className='smallbtn'>{item.price}</button>
                </div>
            </div>
        </div>

            )
        })}
      </div>
    </div>
  )
}

export default Home
