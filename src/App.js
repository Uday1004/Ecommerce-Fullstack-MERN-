import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
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
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Details2 from "./Components/Proudct_details/Details2";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  // Add Toast Notification on Successful Login
  useEffect(() => {
    if (isAuthenticated && user) {
      toast.success(`Welcome back, ${user.name}! 🎉`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [isAuthenticated, user]);

  // Loading Screen
  if (isLoading) {
    return (
      <div className="loading-screen">
        <h1>Loading, Please wait...</h1>
      </div>
    );
  }

  return (
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
          <Route path="/product/:id" element={<Details2 />} />
          {isAuthenticated ? (
            <Route exact path="/Product-Details/:id" element={<Details />} />
          ) : (
            <Route path="/Product-Details/:id" element={<Signin />} />
          )}
          <Route exact path="/Auth-Signin" element={<Signin />} />
          <Route exact path="/Auth-Signup" element={<Signup />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </CustomProvider>
  );
}

export default App;
