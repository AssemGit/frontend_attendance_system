import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './modules/mainpage/Mainpage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index path="/" element={<MainPage />} /> 

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
