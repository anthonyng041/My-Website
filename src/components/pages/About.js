function About() {
  return (
    <div>
      <div className="welcome">
        <h1>Hey! I'm Anthony.</h1>
        <p>
          I am a passionate programmer and athlete that values mental strength.
        </p>
      </div>
      <div className="about">
        <img src="https://picsum.photos/200" alt="me at the beach" />
        <p>
          I have enjoyed math and physics ever since college. I only got into
          computer science in University, as I did a full year in Aerospace
          Engineering but realized it wasn't for me. I have come to love
          programming, as it requires similar problem-solving skills as other
          engineering fields, but nothing compares to solving a hard programming
          problem.
        </p>
        <p>
          My current interests lies in artificial intelligence and web
          development.
        </p>
      </div>
      <p className="statement">
        I am obsessed with improving myself in every way and I am a firm
        believer that hard situations are necessary for us to evolve. The more
        uncomfortable I am with doing something, the greater the potential for
        growth. Nothing easy is worth doing.
      </p>
      <div className="hobbies">
        <p className="first">
          I would one day like to become a black belt and have participated in
          many competitions.
        </p>
        <img src="https://picsum.photos/200" alt="me doing jiu-jitsu" />
        <p className="second">
          My goal is to become as big (but lean) as possible, while still
          maintaning athlticism for jiu-jitsu and marathon running. I am
          currently training to run a half-marathon.
        </p>
        <img src="https://picsum.photos/200" alt="me at the beach" />
      </div>
    </div>
  );
}

export default About;
