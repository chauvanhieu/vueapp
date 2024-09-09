import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MetaCommunityStandVerify from "./pages/MetaCommunityStandVerify";
import BusinessHelpCenter from "./pages/BusinessHelpCenter";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Confirm from "./pages/Confirm";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/meta-community-stand-verify"
          element={<MetaCommunityStandVerify />}
        />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/business-help-center" element={<BusinessHelpCenter />} />
        <Route path="/" element={<MetaCommunityStandVerify />} />
      </Routes>
    </Router>
  );

  return <></>;
}

export default App;
