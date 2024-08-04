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


function App() {
  return (
    <CustomProvider>
      <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Upload" element={<Upload />} />
        <Route exact path="/Demoupload" element={<Demoupload />} />
        <Route exact path="/MyBikes" element={<Mybikes />} />
      </Routes>

      <Footer />
    </div>

    </CustomProvider>
  
     
  );
}

export default App;
