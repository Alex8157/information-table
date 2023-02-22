import "../styles/popUpRow.css";

export function PopUpRow(props) {
  return (
    <div className="popUpRow" onClick={props.close}>
      <div className="popUpRowCard" onClick={(e) => e.stopPropagation()}>
        <button className="deletepopUpRow" onClick={props.close}>
          X
        </button>
        <h3 style={{ margin: "0 0 5px 0" }}>
          Пользователь: {props.row.firstName} {props.row.lastName}
        </h3>
        <p>Телефон: {props.row.phone}</p>
        <p>email: {props.row.email}</p>
        <p>
          Адрес проживания: {props.row.address.streetAddress}{" "}
          {props.row.address.city}
        </p>
        <p>
          Описание: <br />
          {props.row.description}
        </p>
      </div>
    </div>
  );
}
