import React from "react";

export const Todoinput = ({ handleadd }) => {
  const [title, settitle] = useState("");
  return (
    <>
      <input
        type={"text"}
        placeholder={"Add Items"}
        onChange={(event) => settitle(event.target.value)}
      />
      <button onClick={() => handleadd(title)}>Add To List</button>
    </>
  );
};
