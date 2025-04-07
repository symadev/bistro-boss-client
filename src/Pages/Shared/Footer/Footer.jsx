const Footer = () => {
    return (
      <>
        {/* Top Section */}
        <footer className="bg-neutral text-neutral-content p-10">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-4">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-current"
              >
                <path d="..."></path>
              </svg>
              <p>
                <strong>ACME Industries Ltd.</strong>
                <br />
                Providing reliable tech since 1992
              </p>
            </div>
            <nav>
              <h6 className="footer-title mb-2">Social</h6>
              <div className="grid grid-flow-col gap-4">
                {/* Twitter */}
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="..."></path>
                  </svg>
                </a>
                {/* YouTube */}
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="..."></path>
                  </svg>
                </a>
                {/* Facebook */}
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="..."></path>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </footer>
  
        {/* Bottom Section */}
        <footer className="footer footer-center bg-base-300 text-base-content p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All rights reserved by
              ACME Industries Ltd
            </p>
          </aside>
        </footer>
      </>
    );
  };
  
  export default Footer;
  