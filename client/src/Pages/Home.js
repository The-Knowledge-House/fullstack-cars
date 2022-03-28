import React from "react";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import AddMake from "../components/AddMake/AddMake";
import GetAllCar from "../components/GetAllCar/GetAllCar";
import "../App.css";

const Home = ({
  add,
  makeAdded,
  deleteBrand,
  openEdit,
  handleAddNew,
  setMakeAdded,
  setDeleteBrand,
  setAdd,
  setOpenEdit,
}) => {
  return (
    <div>
      <div className="add_Icon">
        <IconButton onClick={handleAddNew}>
          <AddIcon fontSize="large" />
          <h3>Add </h3>
        </IconButton>
      </div>
      {add ? <AddMake setMakeAdded={setMakeAdded} setAdd={setAdd} /> : null}

      <GetAllCar
        setOpenEdit={setOpenEdit}
        openEdit={openEdit}
        makeAdded={makeAdded}
        setDeleteBrand={setDeleteBrand}
        deleteBrand={deleteBrand}
        setAdd={setAdd}
      />
    </div>
  );
};

export default Home;
