import React from 'react'
import vg from "../Assets/2.webp"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillInstagram, AiFillYoutube} from "react-icons/ai"
const Home = () => {
  return (
   <>
    <div className="home" id='home'>
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all your problems...</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>we are your one and only Solution to tech problems you face 
                every day. We are leading tech company whose aim is to increase the problem solving ability in childrenz
            </p>
        </div>
    </div>

    <div className="home3" id='#about'>
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptate numquam assumenda perspiciatis necessitatibus rerum? Quibusdam porro modi consequatur. Error commodi, facilis voluptate, rem ut obcaecati optio vero vitae repellat qui accusamus similique? Eum nostrum earum aliquid sapiente, est nam libero quia odio obcaecati qui consectetur voluptatem veniam nulla nihil, quasi accusamus dolorum ab unde corporis error iusto? Ipsum commodi necessitatibus magnam iure autem ratione doloremque consequuntur neque quidem sunt.</p>
        </div>
    </div>
    <div className="home4" id='#brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay:"0.3s"
                }}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>
                <div style={{
                    animationDelay:"0.5s"
                }}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>
                <div style={{
                    animationDelay:"0.7s"
                }}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
                <div style={{
                    animationDelay:"1s"
                }}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                </div>
            </article>
        </div>
    </div>
   </>
  )
}

export default Home
