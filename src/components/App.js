import { useState } from "react";
import { Table } from "./Table";
import { Pages } from "./Pages";
import { PopUpRow } from "./PopUpRow";
import "../styles/App.css";

export function App() {
  const [popUpRow, setPopUpRow] = useState(null);
  const [page, setPage] = useState(1);
  return (
    <div className="App">
      <header className="appHeader">Таблица с данными</header>
      <Table setPopUpRow={setPopUpRow} page={page}></Table>
      {popUpRow && (
        <PopUpRow row={popUpRow} close={() => setPopUpRow(null)}></PopUpRow>
      )}
      <Pages setPage={setPage} pagesNumber={5} page={page}></Pages>
      <footer className="appFooter">2023</footer>
    </div>
  );
}
