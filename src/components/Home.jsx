import React from "react";
import vg from "../assets/two.png";

import {
  AiFillAmazonCircle,
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>techstar</h1>
          <p>solution to your all problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            we are your one and only sulutioon to the tech problems you face
            everyday. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are? </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae aperiam laboriosam delectus laudantium cum quo totam,
            blanditiis tenetur nihil repellendus nam labore corrupti nostrum
            veritatis dolor ipsam nemo doloribus et. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Repudiandae aperiam laboriosam
            delectus laudantium cum quo totam, blanditiis tenetur nihil
            repellendus nam labore corrupti nostrum veritatis dolor ipsam nemo
            doloribus et. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Repudiandae aperiam laboriosam delectus laudantium cum quo
            totam, blanditiis tenetur nihil repellendus nam labore corrupti
            nostrum veritatis dolor ipsam nemo doloribus et.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
