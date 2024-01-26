import React from "react";
import "../about/About.css";

function About() {
  return (
    <div className="bg-about">
      <h3 className="heading-about text-center pt-lg-5 pt-4 pb-lg-4 pb-2">About Us</h3>
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 col-12 pb-lg-5 pb-3 d-flex justify-content-lg-end">
          <img src="https://static.tripzilla.com/thumb/f/9/168185_800x.jpg" alt="about-img" className="img-about"/>
          </div>
          <div className="col-lg-6 col-12 mb-5 d-flex align-items-center flex-column">
            <p className="pt-lg-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              hic impedit suscipit deleniti quidem ut nemo quis voluptatem
              dolor. Assumenda?Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Nobis aliquam sed pariatur impedit accusamus.
              Numquam, nihil. Vel, tempore culpa? Earum vitae rerum dolorem
              corrupti qui, tenetur similique possimus incidunt veritatis.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis, autem architecto tenetur dicta quam sit beatae nisi
              velit quibusdam amet ratione ipsum cum nulla incidunt similique
              tempora pariatur repudiandae eius! Cumque asperiores reprehenderit
              non tempore?Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Officiis iusto maxime molestiae modi error id. Neque
              voluptates excepturi eos reiciendis, ut consequatur vitae optio
              sed, dolor ipsam ipsum, esse labore atque ratione pariatur porro
              debitis sapiente non adipisci aspernatur vero?Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Ullam inventore dolor
              libero obcaecati nemo quo numquam, quam vero cumque asperiores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
