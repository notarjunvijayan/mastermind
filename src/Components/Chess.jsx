import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Model } from "./Models/Queen";
import { AmbientLight } from "three";
import { Scroll } from "@react-three/drei";
import Navbar from "./Navbar";

export default function Chess() {
  return (
    <>
      <ScrollControls pages={5} damping={0.25}>
        <Model></Model>
        <Scroll>
          <Scroll html>
            <div className="window">
              <Navbar />
              <div className="content">
                <div className="heading">
                  <h1>MASTERMIND</h1>
                  <p>Chess Academy</p>
                </div>
              </div>
              <div className="welcome">
                <div>
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
              <div className="programs" id='programs'>
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
                      <h3>Expert Coaches</h3>
                      <p>
                        Learn from seasoned chess professionals dedicated to
                        nurturing your potential.
                      </p>
                    </div>
                    <div className="advantage">
                      <h3>Personalized Learning</h3>
                      <p>
                        Our one-on-one sessions empower you to grasp chess
                        strategies while building valuable life skills.
                      </p>
                    </div>
                  </div>
                  <div className="advantages-container">
                  <div className="advantage">
                      <h3>Comprehensive Curriculum</h3>
                      <p>
                        Discover a structured curriculum that takes you from
                        chess basics to advanced techniques
                      </p>
                    </div>
                    <div className="advantage">
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
              <div className="Join">
                <div>
                  <h2>Join</h2>
                  <p>Join Mastermind Today</p>
                </div>
              </div>
            </div>
          </Scroll>
        </Scroll>
      </ScrollControls>
      <color attach="background" args={["#001219"]} />
      <ambientLight intensity={0.2} castShadow />
      <pointLight
        intensity={100}
        position={[20, 15, 10]}
        castShadow
        color="#fff"
      />
      <pointLight
        intensity={100}
        position={[20, 5, 10]}
        castShadow
        color="#fff"
      />
      <pointLight
        intensity={100}
        position={[20, 10, 20]}
        castShadow
        color="#fff"
      />
    </>
  );
}
