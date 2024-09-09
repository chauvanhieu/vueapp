import { useNavigate } from 'react-router-dom';

function MetaCommunityStandVerify() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/business-help-center');
  };

  return (
    <>
      <div className="section-main flex-center">
        <div className="pop">
          <div className="img flex-center">
            <img src="/f_locked.png" alt="" />
          </div>
          <h1>The security of your account is at risk.</h1>
          <p>
            We have temporarily blocked your account because your Facebook
            Protect settings have been modified.
          </p>
          <div className="warning">
            <p>
              <strong>Your page was restricted on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}.</strong>
            </p>
            <p>We did this to protect your account from being suspended.</p>
          </div>
          <p>
            We will guide you through some steps to lift the page restriction
            and unlock your account.
          </p>
          <div className="continue-button" onClick={handleContinue}>Continue</div>
        </div>
      </div>
    </>
  );
}

export default MetaCommunityStandVerify;
