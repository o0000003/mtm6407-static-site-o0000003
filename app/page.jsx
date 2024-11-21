import Link from "next/link";

const Home = () => {
  return (
    <>
      <header className="bg-primary text-light py-5">
        <div className="container text-center">
          <h1 className="display-3 fw-bold">Khai Ly O</h1>
          <p className="lead fst-italic">
            Unique, impactful designs for a creative world.
          </p>
          <Link href="#portfolio">
            <span className="btn btn-light btn-lg mt-3">Explore My Work</span>
          </Link>
        </div>
      </header>

      <main className="container mt-5">


        <section id="about" className="py-5 bg-light">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://mir-s3-cdn-cf.behance.net/user/230/cf08391848265027.6690cbed876a6.jpg"
                alt="Khai Ly"
                className="img-fluid rounded-circle shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="text-primary">About Me</h2>
              <p>
                I'm Khai Ly O, an artist and designer passionate about crafting
                impactful and authentic work. With expertise in Illustrator,
                Photoshop, and Figma, I specialize in branding, UI/UX design,
                and creative storytelling.
              </p>
              <p>
                Whether it’s developing a brand identity, designing sleek user
                interfaces, or creating vibrant illustrations, I aim to combine
                creativity with functionality. I believe every project should
                reflect individuality and purpose.
              </p>
              <Link href="/about">
                <span className="btn btn-primary">Learn More</span>
              </Link>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-primary mb-4 text-light py-5">
          <div className="text-center">
            <h2>Contact Me</h2>
            <p>Let's collaborate on something amazing!</p>
            <Link href="/contact">
              <span className="btn btn-light btn-lg">Get in Touch</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
