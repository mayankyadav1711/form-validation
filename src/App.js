import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Formik_Yup from "./components/Formik_Yup";
import ReactHookForm_Zod from "./components/ReactHookForm_Zod";
import toast, { Toaster } from "react-hot-toast";
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/formikyup" element={<Formik_Yup />}></Route>
        <Route path="/reacthookform" element={<ReactHookForm_Zod />}></Route>
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{ zIndex: "9999999999" }} // Ensure the container has a high z-index
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "white",
            color: "black",
            fontSize: "16px",
          },
          success: {
            duration: 3000,
          },
        }}
      />
    </Router>
  );
}

export default App;
