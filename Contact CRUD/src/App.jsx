import Add from "./components/Add";
// import Edit from "./components/Edit";
// import Delete from "./components/Delete";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nave from "./components/NavComponent";
import CheckboxTable from "./components/Contact";
import { useState } from "react";
 
const App = () => {
  const [items, setItems] = useState([]); 
  const [selectedItems, setSelectedItems] = useState([]); 

  return (
    <BrowserRouter>
      <div className="App">
        <Nave />
        <>
          <Routes>
            <Route path="/" element={<Add />} />
            <Route path="/view" element={<CheckboxTable />} />
          </Routes>
          {/* <Delete selectedItems={selectedItems} items={items} setItems={setItems} /> */}
        </>
      </div>
    </BrowserRouter>
  );
};
 
export default App;