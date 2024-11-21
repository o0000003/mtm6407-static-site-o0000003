import Head from "next/head";

export default function Portfolio() {
  return (
    <>
      <div className="bg-dark text-light py-5">
        <div className="container">
          <h1 className="display-4 text-center mb-4 fw-bold text-primary">My Creative Work</h1>
          <p className="lead text-center text-muted mb-5">
            A carefully curated collection of my projects, where creativity and design meet purpose.
          </p>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold">Brand Identity Design</h5>
                  <p className="card-text text-muted">
                    Crafting a unique visual identity that tells a compelling brand story and resonates with audiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold">UI/UX Design</h5>
                  <p className="card-text text-muted">
                    Designing intuitive user interfaces that prioritize user experience while blending functionality with beauty.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold">Illustration</h5>
                  <p className="card-text text-muted">
                    Bringing concepts to life with vibrant illustrations, enhancing visual storytelling with a unique artistic touch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-5">
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold">Packaging Design</h5>
                  <p className="card-text text-muted">
                    Creating engaging and sustainable packaging designs that stand out on shelves while communicating brand values.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold">Web Design</h5>
                  <p className="card-text text-muted">
                    Designing responsive, engaging websites that provide seamless experiences across all devices and platforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold">Photography</h5>
                  <p className="card-text text-muted">
                    Capturing moments through the lens, blending composition and lighting to create compelling visual stories.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-light btn-lg px-4 py-2 rounded-pill">Let’s Collaborate</a>
          </div>
        </div>
      </div>
    </>
  );
}
