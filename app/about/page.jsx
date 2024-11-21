import Head from "next/head";

export default function About() {
  return (
    <>
      <div className="bg-dark text-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <h1 className="display-4 fw-bold text-primary">Welcome to My World</h1>
              <p className="lead text-muted mb-4">
                Hi, I’m Khai Ly! A designer, artist, and creator who thrives on transforming the ordinary into extraordinary.
              </p>
              <p className="text-light mb-5">
                Every project I take on is an opportunity to explore new ways of thinking, pushing the boundaries of design, and delivering work that resonates deeply with the audience.
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-4">
              <div className="card bg-primary text-light border-0 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">Creative Vision</h3>
                  <p className="card-text">
                    I believe design is about capturing the essence of an idea. It's not just about aesthetics—it's about how we connect ideas to people and make an impact that lasts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-secondary text-light border-0 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">Innovative Solutions</h3>
                  <p className="card-text">
                    Whether it's creating a brand identity or crafting a website, I focus on delivering innovative solutions that are as functional as they are visually compelling.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-info text-light border-0 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">Collaborative Mindset</h3>
                  <p className="card-text">
                    I believe in the power of collaboration—working with clients and teams to shape visions, solve problems, and create something meaningful together.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="mb-4 text-primary">Who Am I?</h2>
              <p>
                I am an artist and designer with a deep love for creative expression. My journey began with a passion for exploring design through digital mediums, and over time, I've honed my skills in branding, UI/UX design, and illustration.
              </p>
              <p>
                With every project, I aim to build work that not only looks great but also solves problems, tells stories, and creates lasting connections. I believe that design should never be static—it should always evolve and adapt.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="https://mir-s3-cdn-cf.behance.net/user/230/cf08391848265027.6690cbed876a6.jpg"
                alt="Khai Ly"
                className="img-fluid rounded-circle shadow-lg mb-4"
                style={{ maxWidth: "250px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light text-dark py-5">
        <div className="container text-center">
          <h2 className="text-primary mb-4">Skills & Expertise</h2>
          <div className="row">
            <div className="col-md-4">
              <h4 className="fw-bold">Branding</h4>
              <p>Crafting unique and memorable identities that communicate a brand's core message and values.</p>
            </div>
            <div className="col-md-4">
              <h4 className="fw-bold">UI/UX Design</h4>
              <p>Designing intuitive, user-friendly interfaces that provide seamless digital experiences.</p>
            </div>
            <div className="col-md-4">
              <h4 className="fw-bold">Illustration</h4>
              <p>Bringing concepts to life with custom illustrations that add a unique touch to any project.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
