import "../styles/Table.css";

function Table(props) {
  let classAdd = "";
  let patientsListHtml = props.patientsList.map((patientsListRow) => {
    let medicationsArray = [];
    for (let medication of props.medicationsList) {
      for (let patientId of medication.patientIds) {
        if (patientId === patientsListRow.id) {
          medicationsArray.push({
            name: medication.medicationName,
            unit: medication.unit,
            strength: medication.strength,
            form: medication.form,
            expDate: medication.expDate,
          });
        }
      }
    }

    let patientRowList = [];
    for (let i = 0; i <= medicationsArray.length - 1; i++) {
      if (i === medicationsArray.length - 1) {
        classAdd = "color";
      } else {
        classAdd = "";
      }

      patientRowList.push(
        <tr key={patientsListRow.id + i} className={classAdd}>
          <td>
            {i === 0
              ? patientsListRow.name + " " + patientsListRow.lastName
              : ""}
          </td>
          <td>{i === 0 ? patientsListRow.age : ""}</td>
          <td>{i === 0 ? patientsListRow.gender : ""}</td>
          <td>{medicationsArray[i].name}</td>
          <td>{medicationsArray[i].unit}</td>
          <td>{medicationsArray[i].strength}</td>
          <td>{medicationsArray[i].form}</td>
          <td>{medicationsArray[i].expDate}</td>
        </tr>
      );
    }

    return patientRowList;
  });

  console.log(props.ageFrom);
  console.log(props.ageTo);
  console.log(props.strengthFrom);
  console.log(props.strengthTo);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th
              className={
                (props.ageFrom && props.ageFrom !== 0) ||
                (props.ageTo && props.ageTo !== 999)
                  ? "filled"
                  : ""
              }
            >
              Age
            </th>
            <th>Gender</th>
            <th>Medication</th>
            <th>Unit</th>
            <th
              className={
                (props.strengthFrom && props.strengthFrom !== 0) ||
                (props.strengthTo && props.strengthTo !== 99)
                  ? "filled"
                  : ""
              }
            >
              Strength
            </th>
            <th>Form</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>{patientsListHtml}</tbody>
      </table>
    </>
  );
}

export default Table;
