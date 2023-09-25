import { ScrollControls } from "@react-three/drei";
import { Model } from "./Models/Queen";
import { Scroll } from "@react-three/drei";
import book from "./book.svg";
import coach from "./mentor.svg";
import brain from "./brain.svg";
import interact from "./connection.svg";
import logo from './logo.png'


export default function Chess() {
  return (
    <>
      <ScrollControls pages={6} damping={0.25}>
        <Model></Model>
        <Scroll>
          <Scroll html>
            <div className="window">
              <div className="content">
                <div className="heading">
                  <img src={logo}/>
                  <h1>MASTERMIND</h1>
                  <p>Chess Academy</p>
                </div>
              </div>
              <div className="welcome">
                <div className="welcome-text">
                  <h2>Welcome to Mastermind Chess Academy</h2>
                  <p>
                    Elevate your chess skills with Mastermind Chess Academy.
                  </p>
                  <p>
                    Our personalized coaching and engaging programs are designed
                    to ignite a passion for chess in students of all ages. Join
                    us to embark on a journey of strategy, critical thinking,
                    and fun.
                  </p>
                </div>
              </div>
              <div className="programs" id="programs">
                <div>
                  <h2>Our Programs</h2>
                  <p>
                    Our chess programs cater to every level of expertise, from
                    beginners to advanced players.
                  </p>
                  <p>
                    Uncover the world of chess through interactive lessons,
                    enriching your mind and enhancing problem-solving abilities.
                    Join us to explore the art of chess.
                  </p>
                </div>
              </div>
              <div className="advantages">
                <div>
                  <h2>Advantages</h2>
                  <div className="advantages-container">
                    <div className="advantage">
                      <img src={coach} />
                      <h3>Expert Coaches</h3>
                      <p>
                        Learn from seasoned chess professionals dedicated to
                        nurturing your potential.
                      </p>
                    </div>
                    <div className="advantage">
                      <img src={brain} />
                      <h3>Personalized Learning</h3>
                      <p>
                        Our one-on-one sessions empower you to grasp chess
                        strategies while building valuable life skills.
                      </p>
                    </div>
                  </div>
                  <div className="advantages-container">
                    <div className="advantage">
                      <img src={book} />
                      <h3>Comprehensive Curriculum</h3>
                      <p>
                        Discover a structured curriculum that takes you from
                        chess basics to advanced techniques
                      </p>
                    </div>
                    <div className="advantage">
                      <img src={interact} />
                      <h3>Interactive Experience</h3>
                      <p>
                        Engage in real-time learning with our interactive
                        platform. Ask questions, analyze games, and receive
                        instant feedback, all while enjoying the thrill of
                        chess.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="join">
                <div className="join-content">
                  <h2>Join Mastermind Chess Academy Today!</h2>
                  <p>
                    Begin your chess journey by taking the first step with us
                  </p>

                  <form
                    action="https://getform.io/f/e5778e65-9745-4ae9-acde-d8c0ecff1dce"
                    method="POST"
                  >
                    <input type="text" placeholder='Name' name="name" required="" /><br/>
                    <input type="email" name="email" placeholder='Email' required="" /><br/>
                    <input type="tel" name="phone" placeholder="Phone" required="" /><br/>
                    <div className="button">
                      <input className='submit' type="submit" value="Submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Scroll>
        </Scroll>
      </ScrollControls>
      <ambientLight/>
      <directionalLight intensity={0.5} position={[20,2,7]}/>
      <pointLight intensity={100} position={[20,5,15]}/>
      <directionalLight intensity={1} position={[15,-7,25]}/>
    </>
  );
}
