import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainPage from './modules/mainpage/Mainpage';
import SignIn from "./modules/login/SignIn";
import SignUp from "./modules/login/SignUp";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route index path="/" element={<MainPage />} />  */}
          <Route index path="/signin" element={<SignIn />} /> 
          <Route index path="/" element={<SignUp />} /> 



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
