import React from "react";

import UpperTitle from "./UpperTitle/UpperTitle";
import TableHeader from "./TableHeader/TableHeader";
import Artists from "./Artists/Artists";

export default function index() {
  return (
    <>
      <UpperTitle />
      <TableHeader />
      <Artists />
    </>
  );
}
