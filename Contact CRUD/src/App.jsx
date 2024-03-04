import Add from "./components/Add";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nave from "./components/NavComponent";
import CheckboxTable from "./components/Contact";
 
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nave />
        <>
          <Routes>
            <Route path="/" element={<Add />} />
            <Route path="/view" element={<CheckboxTable />} />
          </Routes>
        </>
      </div>
    </BrowserRouter>
  );
};
 
export default App;