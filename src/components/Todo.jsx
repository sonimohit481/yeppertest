import React from "react";
import { Todoinput } from "./Todoinput";
import { v4 as uuid } from "uuid";

export const Todo = () => {
  const [maindata, setmaindata] = React.useState([]);
  const handleadd = (val) => {
    const obj = {
      title: val,
      status: false,
      id: uuid(),
    };
    return setmaindata([...maindata, obj]);
  };
  return (
    <div>
      <Todoinput handleadd={handleadd} />
      {}
    </div>
  );
};
