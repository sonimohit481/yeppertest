import React from "react";
import { Todoinput } from "./Todoinput";
import { Todolist } from "./Todolist";
import { v4 as uuid } from "uuid";

export const Todo = () => {
  const [maindata, setmaindata] = React.useState([]);
  const [show, setshow] = React.useState(true);
  const handleadd = (val) => {
    const obj = {
      title: val,
      status: false,
      id: uuid(),
    };
    return setmaindata([...maindata, obj]);
  };
  const handletoggle = (id) => {
    const newdata = maindata.map((ele) =>
      ele.id === id ? { ...ele, status: !ele.status } : ele
    );
    setmaindata(newdata);
  };
  const handledelete = (id) => {
    const newdata = maindata.filter((ele) => ele.id !== id);
    setmaindata(newdata);
  };
  return (
    <div>
      <Todoinput handleadd={handleadd} />
      {maindata
        .filter((item) => (show ? true : !item.status))
        .map((element) => (
          <Todolist
            key={element.id}
            {...element}
            handletoggle={handletoggle}
            handledelete={handledelete}
          />
        ))}
      <button onClick={() => setshow(!show)}>
        {show ? "UnComplete" : "Show all"}
      </button>
    </div>
  );
};
