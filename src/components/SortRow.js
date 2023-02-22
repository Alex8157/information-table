import { useState } from "react";
import "../styles/sortRow.css";

export function SortRow(props) {
  const [current, setCurrent] = useState("");
  const click = (e) => {
    let type = e.target.className.split(" ")[1].slice(4);
    type = type[0].toLowerCase() + type.slice(1);
    props.setSort({
      type: type,
      biggestToSmallest: current === type ? -1 : 1,
    });
    current === type ? setCurrent("") : setCurrent(type);
  };
  return (
    <div className="sortRow">
      <div value="id" onClick={(e) => click(e)} className="sortRowBlock sortId">
        id
      </div>
      <div onClick={(e) => click(e)} className="sortRowBlock sortFirstName">
        firstName
      </div>
      <div onClick={(e) => click(e)} className="sortRowBlock sortLastName">
        lastName
      </div>
      <div onClick={(e) => click(e)} className="sortRowBlock sortEmail">
        email
      </div>
      <div onClick={(e) => click(e)} className="sortRowBlock sortPhone">
        phone
      </div>
    </div>
  );
}
