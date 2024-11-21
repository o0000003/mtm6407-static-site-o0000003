"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body>
        {/* Navbar*/}
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="/">
              <span className="fw-bold text-primary">Khai Ly</span>
            </a>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto text-uppercase">
                <li className="nav-item">
                  <a className="nav-link text-primary fw-semibold" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-primary fw-semibold" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-primary fw-semibold"
                    href="/portfolio"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-primary fw-semibold"
                    href="/hobbies"
                  >
                    Hobbies
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-primary fw-semibold"
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {children}

        <footer className="bg-primary text-light text-center py-4">
          <div className="container">
            <p className="mb-2">
              © {new Date().getFullYear()} Khai Ly O. All Rights Reserved.
            </p>
            <div className="social-links">
              <a
                href="https://twitter.com/?lang=en"
                target="_blank"
                className="text-light mx-2"
              >
                Twitter
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="text-light mx-2"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="text-light mx-2"
              >
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
