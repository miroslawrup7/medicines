import React, { useEffect, useState } from "react";
import axios from "axios";

import Table from "../components/Table";
import Filters from "../components/Filters";

import "../styles/App.css";

import { FaArrowCircleUp } from "react-icons/fa";

let patientsListVar = [];
let medicinesListVar = [];
let ageFrom;
let ageTo;
let strengthFrom;
let strengthTo;

function App() {
  const [patientsList, setPatientsList] = useState([]);
  const [medicationsList, setMedicationsList] = useState([]);

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  const getPatientsData = () => {
    axios
      .get("https://cerber.pixel.com.pl/api/patients", {}, axiosConfig)
      .then((res) => {
        setPatientsList(res.data);
        patientsListVar = res.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getMedicinesData = () => {
    axios
      .get("https://cerber.pixel.com.pl/api/medicine", {}, axiosConfig)
      .then((res) => {
        setMedicationsList(res.data);
        medicinesListVar = res.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getPatientsData();
    getMedicinesData();
  }, []);

  const handleFiltersChange = () => {
    ageFrom = Number(
      document.querySelector(".age input[placeholder='From']").value
    );
    ageTo = Number(
      document.querySelector(".age input[placeholder='To']").value
    );

    strengthFrom = Number(
      document.querySelector(".strength input[placeholder='From']").value
    );
    strengthTo = Number(
      document.querySelector(".strength input[placeholder='To']").value
    );

    !ageFrom && (ageFrom = 0);
    !ageTo && (ageTo = 999);
    !strengthFrom && (strengthFrom = 0);
    !strengthTo && (strengthTo = 99);

    let filteredPatientsList = patientsListVar.filter((elem) => {
      return elem.age >= ageFrom && elem.age <= ageTo;
    });

    setPatientsList(filteredPatientsList);

    let filteredMedicinesList = medicinesListVar.filter((elem) => {
      return elem.strength >= strengthFrom && elem.strength <= strengthTo;
    });

    setMedicationsList(filteredMedicinesList);
  };

  let mybutton = document.getElementById("myBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <div onClick={topFunction} id="myBtn">
        <FaArrowCircleUp />
      </div>
      <header></header>
      <div className="wrapper">
        <div className="filters">
          <Filters
            handleFiltersChange={handleFiltersChange}
            ageFrom={ageFrom}
            ageTo={ageTo}
            strengthFrom={strengthFrom}
            strengthTo={strengthTo}
          />
        </div>
        <div className="table">
          <Table
            patientsList={patientsList}
            medicationsList={medicationsList}
            ageFrom={ageFrom}
            ageTo={ageTo}
            strengthFrom={strengthFrom}
            strengthTo={strengthTo}
          />
        </div>
      </div>
    </>
  );
}

export default App;
