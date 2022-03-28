import { useState } from "react";
import "./App.css";

import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Models from "./Pages/Models";
import AllModels from "./components/Allmodels/AllModels";

function App() {
  const [add, setAdd] = useState(false);
  const [makeAdded, setMakeAdded] = useState(false);
  const [deleteBrand, setDeleteBrand] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleAddNew = () => {
    setAdd((open) => !open);
  };

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={ <Home
            setOpenEdit={setOpenEdit}
            setAdd={setAdd}
            setDeleteBrand={setDeleteBrand}
            setMakeAdded={setMakeAdded}
            handleAddNew={handleAddNew}
            add={add}
            makeAdded={makeAdded}
            deletBrand={deletBrand}
            openEdit={openEdit}
          />}/>
         
      
        <Route path="/:title/:id" element={<Models />} />
      </Routes>
    </div>
  );
}

export default App;
