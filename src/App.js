import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Upload from "./Components/UploadProducts/Upload";
import Mybikes from "./Components/User/Mybikes";
import { CustomProvider } from "rsuite";
import Demoupload from "./Components/UploadProducts/Demoupload";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProductPage from "./Components/Utils/Products";
import Topproducts from "./Components/Utils/Exclusive";
import Details from "./Components/Proudct_details/Details";
import Signin from "./Components/Authentication/Signin";
import Signup from "./Components/Authentication/Signup";

// Import Auth0 Provider
import { Auth0Provider } from "@auth0/auth0-react";

function App() { 
  return (
    <Auth0Provider
      domain="dev-mwocm6eymg4l83l2.us.auth0.com"
      clientId="PJ6CoOdNVUuyj0HLrDdlnewgDS1uIeBV"
      redirectUri="http://localhost:3000" // Redirect after login
    >
      <CustomProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Upload" element={<Upload />} />
            <Route exact path="/Demoupload" element={<Demoupload />} />
            <Route exact path="/MyBikes" element={<Mybikes />} />
            <Route exact path="/Products" element={<ProductPage />} />
            <Route exact path="/demo" element={<Demoupload />} />
            <Route exact path="/Top-Products" element={<Topproducts />} />
            <Route exact path="/Product-Details/:id" element={<Details />} />
            <Route exact path="/Auth-Signin" element={<Signin />} />
            <Route exact path="/Auth-Signup" element={<Signup />} />
          </Routes>
          <Footer />
        </div>
      </CustomProvider>
    </Auth0Provider>
  );
}

export default App;
