import React from "react";
import myImg from '../assets/IMG_1552 copy ---.jpg'
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <section id="home" className="home">
      <div className="container text-center">
        <div className="profile-image-container">
          <img
            // src="https://png.pngtree.com/png-clipart/20231109/original/pngtree-programmer-it-developer-png-image_13520483.png"
            src={myImg}
            alt="Profile_Image"
            className="profile-image"
          />
        </div>
        <h1 className="mt-3">Hi, I'm Kumaresan</h1>
        <span>
          <Typewriter
          words={["A MERN Stack Developer","Ready to Bulid Amazing Apps"]}
          loop
          cursor
          cursorStyle="_"
          />
        </span>
      </div>
    </section>
  );
}

export default Home;
