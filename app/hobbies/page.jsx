"use client"

export default function Hobbies() {
  return (
    <>
      <div className="bg-light py-5">
        <div className="container">
          <h1 className="text-center mb-4 display-4 fw-bold text-primary">My Hobbies</h1>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-lg">
                <div className="card-body">
                  <h5 className="card-title text-success fw-bold">Illustration and Sketching</h5>
                  <p className="card-text">
                    Creating detailed illustrations and experimenting with digital and traditional mediums to explore new artistic techniques.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-lg">
                <div className="card-body">
                  <h5 className="card-title text-danger fw-bold">Graphic Design Challenges</h5>
                  <p className="card-text">
                    Participating in design projects and exploring innovative ways to create impactful branding and visual experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-lg">
                <div className="card-body">
                  <h5 className="card-title text-warning fw-bold">Creative Writing</h5>
                  <p className="card-text">
                    Writing short stories and character concepts that connect to visual designs, bringing ideas to life.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-lg">
                <div className="card-body">
                  <h5 className="card-title text-info fw-bold">Cultural Storytelling</h5>
                  <p className="card-text">
                    Documenting diverse cultures and traditions through design work and photography, blending visuals with narratives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        h1 {
          font-family: "Poppins", sans-serif;
          letter-spacing: 1.2px;
        }
        .card-title {
          font-family: "Roboto", sans-serif;
          letter-spacing: 0.8px;
        }
        .card-text {
          font-size: 1rem;
          line-height: 1.5;
          font-family: "Open Sans", sans-serif;
          color: #555;
        }
        .card {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </>
  );
}
