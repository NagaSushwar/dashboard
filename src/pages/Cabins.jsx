//import { useEffect } from "react";
//import { useState } from "react";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
//import { getCabins } from "../services/apiCabins";
import CabinTable from "./../../src/features/cabins/CabinTable"
// import Button from "./../ui/Button";
// import CreateCabinForm from "./../features/cabins/CreateCabinForm";
import AddCabins from "./../features/cabins/AddCabins";


function Cabins() {
  return (
    <>
    <Row type="horizontal" style={{display:"flex",justifyContent:"space-between"}}>
      <Heading as="h1">All cabins</Heading>
      <>
        <CabinTableOperations/>
        </>
    </Row>
    <Row>
      <CabinTable/>
    </Row>
    <AddCabins/>
    </>
  );
}



export default Cabins;
