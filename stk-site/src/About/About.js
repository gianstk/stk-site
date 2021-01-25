import React, { Component } from 'react';

import './About.css';
// import koi from '../../public/illustrator/koiWave.png';

class About extends Component {
  render() {
    return (
        <div className="About">
          <div className="mainContainer">

              <img className="koi" src={window.location.origin + '/illustrator/koiWave.png'} />

              <h1>Suebtrakul : Gian</h1>
              <p>I am Suebtrakul. I know it sounds weird lol but all Thai people always has a long name like this. Well actually... just call me Gian. I am a recent graduated computer engineer in Sydney who is passionated in blending the arts and technologies to be one.</p>

              <h2>My life journey</h2>
              <p>I was born and raised in Bangkok, Thailand. When I finished my high school, I went to faculty of electrical engineering at Thammasat University, where I had a chance to playing around with hardware programming (Arduino) which mainly influenced me to explore more on the software world and then transfer to Computer engineering degree at University of New South Wales, Sydney, in 2018.</p>
              <p>3 years of fully academic life in Australia at UNSW, I got opportunities to learn and work on different areas such as web application, machine learning, and especially Blockchain technology & decentralized services. Just imagining how our life could be changed significantly if there is a way to maintain the existing services but still able to fully protect the digital assets, I decided to dive deeper in my thesis in the topic of “Decentralized Data Sharing in Web 3.0: SOLID and Blockchains” with <a href="https://helen-paik.net/">Dr. Helen Paik (UNSW, Australia)</a> and Dr. Sherry Xu (Data61, Australia) in 2019.</p>
              <p>Apart form the academic field, I have my own personal interest and have been working as an illustrator and graphic designer in some marketing and creative teams at <a href="https://www.csesoc.unsw.edu.au/">CSESOC</a> and <a href="https://bluesat.com.au/">BLUESAT</a> at UNSW. You can enjoy some of my works on <a href="https://dribbble.com/gianstk">my dribble...</a></p>

              <h2>Present and the near future</h2>
              <p>I currently work as a software engineer at CleanSpace Technology taking care of the mobile application development in both iOS (Swift) and android (Android Studio). I probably stay here and keep learning. Then at one point of my life, according to my interests in computer science and arts, I want to become a better engineer and designer that could blend 2 areas at once.</p>
          </div>
        </div>
    );
  }
}

export default About;