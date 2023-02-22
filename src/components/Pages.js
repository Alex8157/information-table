import { useState } from "react";
import "../styles/pages.css";

export function Pages(props) {
  const [page, setPage] = useState(props.page);
  const makePages = () => {
    let content = [];
    for (let i = 1; i <= props.pagesNumber; i++) {
      content.push(
        <div
          className="pageNumber"
          onClick={() => {
            props.setPage(i);
            setPage(i);
          }}
          key={i}
          style={{
            borderBottom: i === page ? "1px solid rgb(51, 56, 68)" : "",
          }}
        >
          {i}
        </div>
      );
    }
    return content;
  };
  return <div className="pages">{makePages()}</div>;
}
