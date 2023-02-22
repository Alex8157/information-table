import "../styles/row.css";

export function Row(props) {
  return (
    <div className="row" onClick={() => props.setPopUpRow(props.row)}>
      <div className="rowBlock rowId">{props.row.id}</div>
      <div className="rowBlock rowFirstName">{props.row.firstName}</div>
      <div className="rowBlock rowLastName">{props.row.lastName}</div>
      <div className="rowBlock rowEmail">{props.row.email}</div>
      <div className="rowBlock rowPhone">{props.row.phone}</div>
    </div>
  );
}
