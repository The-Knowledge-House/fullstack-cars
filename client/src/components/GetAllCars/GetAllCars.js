import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import MakeCard from "./Shared/MakeCard";
import Form from "../AddMake/Form";

const useStyles = makeStyles({
  rootCardDiv: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

const GetAllCar = ({
  makeAdded,
  setDeleteBrand,
  deleteBrand,
  setAdd,
  openEdit,
  setOpenEdit,
}) => {
  const [updatingBrand, setUpdatingBrand] = useState([]);
  const [update, setUpdate] = useState(false);
  const classes = useStyles();
  const [make, setMake] = useState([]);
  const fetchMaker = async () => {
    const URL = "/api/brands";
    const response = await axios.get(URL);
    setMake(response.data);
  };
  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };

    const editedBrand = Object.assign(updatingBrand, updatedField);

    setUpdatingBrand(editedBrand);
  };
  console.log(updatingBrand._id);
  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      url: `/api/brands/${updatingBrand._id}`,
      method: "PUT",
      data: updatingBrand,
    })
      .then((res) => {
        console.log(res);
        setUpdate((up) => !up);
        setOpenEdit((edit) => !edit);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMaker();
  }, [makeAdded, deleteBrand, update]);

  // console.log(updatingBrand);
  const AllBrand = make.map((item) => (
    <MakeCard
      key={item._id}
      {...item}
      setDeleteBrand={setDeleteBrand}
      setUpdatingBrand={setUpdatingBrand}
      setAdd={setAdd}
      setOpenEdit={setOpenEdit}
    />
  ));
  return (
    <>
      {openEdit ? (
        <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      ) : null}
      ;<div className={classes.rootCardDiv}>{AllBrand}</div>
    </>
  );
};

export default GetAllCar;
