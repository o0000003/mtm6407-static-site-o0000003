export default function Contact() {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <h1 className="text-center mb-4 display-4 fw-bold text-primary">Get in Touch</h1>
        <p className="text-center mb-5 text-muted">
          I would love to hear from you! Whether you have a project in mind or just want to connect, feel free to reach out.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="form-label fw-semibold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label fw-semibold">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary py-3 rounded-pill">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="text-center mt-5">
          <p className="text-muted">
            Or contact me directly via email at:{" "}
            <a href="mailto:yourname@example.com" className="text-primary">
              KhaiLyO@gmail.com
            </a>
          </p>
          <p className="text-muted">
            Connect with me on social media:
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ms-2 text-primary"
            >
              Twitter
            </a>{" "}
            |{" "}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ms-2 text-primary"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
