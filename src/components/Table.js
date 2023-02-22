import { useState, useEffect } from "react";
import { SortRow } from "./SortRow";
import { Row } from "./Row";
import { PostService } from "../API/PostService";
import { PopUpLoading } from "./PopUpLoading";
import "../styles/table.css";

export function Table(props) {
  const [rows, setRows] = useState([]);
  const [sort, setSort] = useState({ type: "id", biggestToSmallest: -1 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      setRows([...(await PostService.getRows(30))]);
      setLoading(false);
    })();
  }, [props.page]);

  useEffect(() => {
    setRows([
      ...rows.sort((a, b) => {
        if (a[sort.type] > b[sort.type]) {
          return sort.biggestToSmallest;
        } else {
          return -sort.biggestToSmallest;
        }
      }),
    ]);
  }, [sort]);

  return (
    <div className="table">
      <SortRow setSort={setSort}></SortRow>
      {rows.map((row) => {
        return (
          <Row key={row.phone} row={row} setPopUpRow={props.setPopUpRow}></Row>
        );
      })}
      {loading && <PopUpLoading></PopUpLoading>}
    </div>
  );
}
