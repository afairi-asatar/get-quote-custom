const BASE_URL = "https://cloudrun-webmware-001-iwrlbwjlca-ey.a.run.app/api/v2";
let cachedItems = [
  {
    priceFrom: 31.0,
    priceTo: null,
    id: 3,
    name: "Alfa Romeo"
  },
  {
    priceFrom: 33.0,
    priceTo: null,
    id: 6,
    name: "Audi"
  },
  {
    priceFrom: 34.0,
    priceTo: null,
    id: 8,
    name: "Bentley"
  },
  {
    priceFrom: 33.0,
    priceTo: null,
    id: 9,
    name: "BMW"
  },
  {
    priceFrom: 32.0,
    priceTo: null,
    id: 12,
    name: "Cadillac"
  },
  {
    priceFrom: 33.0,
    priceTo: null,
    id: 13,
    name: "Chevrolet"
  },
  {
    priceFrom: 35.0,
    priceTo: null,
    id: 14,
    name: "Chrysler"
  },
  {
    priceFrom: 35.0,
    priceTo: null,
    id: 15,
    name: "Citroen"
  },
  {
    priceFrom: 33.0,
    priceTo: null,
    id: 16,
    name: "Dacia"
  },
  {
    priceFrom: 34.0,
    priceTo: null,
    id: 17,
    name: "Daewoo"
  },
  {
    priceFrom: 34.0,
    priceTo: null,
    id: 19,
    name: "Daihatsu"
  },
  {
    priceFrom: 33.0,
    priceTo: null,
    id: 22,
    name: "Dodge"
  },
  {
    priceFrom: 32.0,
    priceTo: null,
    id: 24,
    name: "Fiat"
  },
  {
    priceFrom: 33.0,
    priceTo: null,
    id: 26,
    name: "Ford"
  },
  {
    priceFrom: 35.0,
    priceTo: null,
    id: 28,
    name: "GMC"
  },
  {
    priceFrom: 34.0,
    priceTo: null,
    id: 29,
    name: "Honda"
  },
  {
    priceFrom: 34.0,
    priceTo: null,
    id: 30,
    name: "Hyundai"
  },
  {
    priceFrom: 34.0,
    priceTo: null,
    id: 31,
    name: "Infiniti"
  },
  {
    priceFrom: 34.0,
    priceTo: null,
    id: 32,
    name: "Isuzu"
  },
  {
    priceFrom: 34.0,
    priceTo: null,
    id: 33,
    name: "Jaguar"
  },
  {
    priceFrom: 33.0,
    priceTo: null,
    id: 34,
    name: "Jeep"
  },
  {
    priceFrom: 32.0,
    priceTo: null,
    id: 35,
    name: "Kia"
  },
  {
    priceFrom: 35.0,
    priceTo: null,
    id: 36,
    name: "Lada"
  },
  {
    priceFrom: 34.0,
    priceTo: null,
    id: 37,
    name: "Lancia"
  },
  {
    priceFrom: 34.0,
    priceTo: null,
    id: 38,
    name: "Land Rover"
  },
  {
    priceFrom: 33.0,
    priceTo: null,
    id: 39,
    name: "LEVC"
  },
  {
    priceFrom: 32.0,
    priceTo: null,
    id: 40,
    name: "Lexus"
  },
  {
    priceFrom: 32.0,
    priceTo: null,
    id: 41,
    name: "MAN"
  },
  {
    priceFrom: 33.0,
    priceTo: null,
    id: 42,
    name: "Maserati"
  },
  {
    priceFrom: 32.0,
    priceTo: null,
    id: 44,
    name: "Mazda"
  },
  {
    priceFrom: 31.0,
    priceTo: null,
    id: 45,
    name: "Mercedes"
  },
  {
    priceFrom: 31.0,
    priceTo: null,
    id: 46,
    name: "MG"
  },
  {
    priceFrom: 33.0,
    priceTo: null,
    id: 48,
    name: "Mini"
  },
  {
    priceFrom: 35.0,
    priceTo: null,
    id: 49,
    name: "Mitsubishi"
  },
  {
    priceFrom: 33.0,
    priceTo: null,
    id: 50,
    name: "Nissan"
  },
  {
    priceFrom: 34.0,
    priceTo: null,
    id: 52,
    name: "Opel"
  },
  {
    priceFrom: 32.0,
    priceTo: null,
    id: 53,
    name: "Peugeot"
  },
  {
    priceFrom: 31.0,
    priceTo: null,
    id: 55,
    name: "Pontiac"
  },
  {
    priceFrom: 34.0,
    priceTo: null,
    id: 56,
    name: "Porsche"
  },
  {
    priceFrom: 33.0,
    priceTo: null,
    id: 57,
    name: "Proton"
  },
  {
    priceFrom: 33.0,
    priceTo: null,
    id: 58,
    name: "Renault"
  },
  {
    priceFrom: 35.0,
    priceTo: null,
    id: 60,
    name: "Rover"
  },
  {
    priceFrom: 35.0,
    priceTo: null,
    id: 61,
    name: "Saab"
  },
  {
    priceFrom: 31.0,
    priceTo: null,
    id: 62,
    name: "Seat"
  },
  {
    priceFrom: 35.0,
    priceTo: null,
    id: 63,
    name: "Skoda"
  },
  {
    priceFrom: 32.0,
    priceTo: null,
    id: 64,
    name: "Smart"
  },
  {
    priceFrom: 31.0,
    priceTo: null,
    id: 65,
    name: "Ssangyong"
  },
  {
    priceFrom: 33.0,
    priceTo: null,
    id: 66,
    name: "StreetScooter"
  },
  {
    priceFrom: 33.0,
    priceTo: null,
    id: 67,
    name: "Subaru"
  },
  {
    priceFrom: 31.0,
    priceTo: null,
    id: 68,
    name: "Suzuki"
  },
  {
    priceFrom: 32.0,
    priceTo: null,
    id: 70,
    name: "Tesla"
  },
  {
    priceFrom: 32.0,
    priceTo: null,
    id: 71,
    name: "Toyota"
  },
  {
    priceFrom: 32.0,
    priceTo: null,
    id: 73,
    name: "Volvo"
  },
  {
    priceFrom: 34.0,
    priceTo: null,
    id: 74,
    name: "VW"
  }
];
let lang = "de";
document.addEventListener("DOMContentLoaded", function () {
  for (
    var i = 0;
    i < document.getElementsByClassName("dropdown-button").length;
    i++
  ) {
    (function (index) {
      var button = document.getElementById("dropdown-button" + (index + 1));
      var arrow = document.getElementById("arrow" + (index + 1));
      if (button) {
        button.removeAttribute("href");
        arrow.onclick = function () {
          toggleDropdown(index + 1);
        };
        button.onclick = function () {
          toggleDropdown(index + 1);
        };
      }
    })(i);
  }

  try {
    lang = Weglot.getCurrentLang();
    clearTable();
  } catch (error) {
    lang = "de";
  }
});

let make = -1;
let model = -1;
let fuelType = -1;
let yearRangeId = -1;
let bodyType = -1;
let hpMin = -1;
let hpMax = -1;
let yearMin = -1;
let yearMax = -1;
let abstractVehicleId = -1;

clearTable();

populateDropdown(document.getElementById("dropdown-content1"), cachedItems);
clearTable();

function toggleDropdown(number) {
  // Check if previous dropdowns have selections (if applicable)
  const values = [
    make,
    model,
    fuelType,
    hpMin + hpMax,
    yearMin + yearMax,
    bodyType
  ];
  for (var i = 0; i < number - 1; i++) {
    if (values[i] < 0) {
      return;
    }
  }

  let contentId = "dropdown-content" + number;
  var content = document.getElementById(contentId);
  let otherDropdowns = document.getElementsByClassName("dropdown-content");

  // Close all other dropdowns
  Array.from(otherDropdowns).forEach(function (element) {
    if (element.id !== contentId) {
      element.style.display = "none";
      element.style.opacity = 0;

      //delete all child nodes
      element.innerHTML = "";
    }
  });
  Array.from(document.getElementsByClassName("arrow-image")).forEach(function (
    arrow
  ) {
    if (arrow.id !== "arrow" + number) {
      arrow.style.transform = "rotate(0deg) translateY(-50%)";
    }
  });

  // Toggle current dropdown
  if (content.style.display === "block") {
    document.getElementById("arrow" + number).style.transform =
      "rotate(0deg) translateY(-50%)";
    content.style.display = "none";
    content.style.opacity = 0;
  } else {
    content.style.display = "block";
    document.getElementById("arrow" + number).style.transform =
      "rotate(180deg) translateY(50%)";
    let fetchURL = "";

    if (number === 1) {
      populateDropdown(content, cachedItems);
    } else {
      switch (number) {
        case 2:
          fetchURL =
            BASE_URL + "/filters" + "/manufacturers/" + make + "/model-series";
          break;
        case 3:
          fetchURL =
            BASE_URL +
            "/filters" +
            "/manufacturers" +
            "/model-series/" +
            model +
            "/fuel-types";
          break;
        case 4:
          fetchURL =
            BASE_URL +
            "/filters" +
            "/manufacturers" +
            "/model-series/" +
            model +
            "/perfomance-ranges" +
            "?" +
            "fuel_type_id=" +
            fuelType;
          break;
        case 5:
          fetchURL =
            BASE_URL +
            "/filters" +
            "/manufacturers" +
            "/model-series/" +
            model +
            "/year-ranges" +
            "?" +
            "fuel_type_id=" +
            fuelType +
            "&performance_hp_from=" +
            hpMin +
            "&performance_hp_to=" +
            hpMax;
          break;
        case 6:
          fetchURL =
            BASE_URL +
            "/filters" +
            "/manufacturers" +
            "/model-series/" +
            model +
            "/body-types" +
            "?" +
            "fuel_type_id=" +
            fuelType +
            "&performance_hp_from=" +
            hpMin +
            "&performance_hp_to=" +
            hpMax +
            "&production_from_year=" +
            yearMin +
            "&production_to_year=" +
            yearMax;
          break;
      }
      fetch(fetchURL)
        .then((response) => response.json())
        .then((data) => {
          populateDropdown(content, data);
        })
        .catch((error) => console.error("Error fetching items:", error));
    }
  }
  setTimeout(() => {
    content.style.opacity = 1;
  }, 0);
}

function populateDropdown(dropdownContent, items) {
  lang = Weglot.getCurrentLang();
  dropdownContent.innerHTML = ""; // Clear existing items
  let currentSelection;
  switch (dropdownContent.id) {
    case "dropdown-content1":
      currentSelection = make;
      break;
    case "dropdown-content2":
      currentSelection = model;
      break;
    case "dropdown-content3":
      currentSelection = fuelType;
      break;
    case "dropdown-content4":
      currentSelection = hpMin;
      break;
    case "dropdown-content5":
      currentSelection = yearRangeId;
      break;
    case "dropdown-content6":
      currentSelection = bodyType;
      break;
  }
  items.forEach((item) => {
    let a = document.createElement("a");
    a.classList.add("car-link");
    a.href = "#";
    a.id = item.id;
    if (dropdownContent.id === "dropdown-content1") {
      a.innerText = item.name; // Adjust according to the actual data structure
    } else if (dropdownContent.id === "dropdown-content4") {
      a.innerText =
        item.minHpValue +
        " - " +
        item.maxHpValue +
        (lang === "de" ? " PS" : " HP");
      a.setAttribute("minHpValue", item.minHpValue);
      a.setAttribute("maxHpValue", item.maxHpValue);
      a.id = item.minHpValue;
    } else if (dropdownContent.id === "dropdown-content5") {
      a.innerText =
        item.startOfRange +
        " - " +
        (item.endOfRange ? item.endOfRange : lang === "de" ? "heute" : "today");
      a.setAttribute("startOfRange", item.startOfRange);
      a.setAttribute("endOfRange", item.endOfRange);
      a.id = item.startOfRange;
    } else {
      if (lang === "de") a.innerText = item.nameDe;
      else a.innerText = item.nameEn;
    }

    if (a.id === currentSelection) {
      a.classList.add("selected");
    }

    dropdownContent.appendChild(a);

    a = document.getElementById(a.id);

    a.onclick = function () {
      selectItem(a, dropdownContent.id);
    };
  });
}

function selectItem(element, contentId) {
  abstractVehicleId = -1;
  dropdownNumber = parseInt(contentId.charAt(contentId.length - 1));
  // Remove 'selected' class from all items in this dropdown
  let items = element.parentNode.querySelectorAll("a");
  items.forEach((item) => item.classList.remove("selected"));

  // Add 'selected' class to the clicked item
  element.classList.add("selected");

  var button = document.getElementById("dropdown-button" + dropdownNumber);

  if (button.innerText !== element.innerText) {
    button.innerText = element.innerText;
    // Need to reset all dropdowns up to this point with loop
    for (
      var i = document.getElementsByClassName("dropdown-button").length;
      i > dropdownNumber;
      i--
    ) {
      var button = document.getElementById("dropdown-button" + i);
      if (button) {
        switch (i) {
          case 2:
            button.innerText = lang === "de" ? "Modell" : "Model";
            model = -1;
            break;
          case 3:
            button.innerText = lang === "de" ? "Treibstoffart" : "Fuel Type";
            fuelType = -1;
            break;
          case 4:
            button.innerText = lang === "de" ? "Leistung" : "Power";
            hpMin = -1;
            hpMax = -1;
            break;
          case 5:
            button.innerText =
              lang === "de" ? "Baujahr" : "Year of manufacture";
            yearRangeId = -1;
            break;
          case 6:
            button.innerText = lang === "de" ? "Karosserie" : "Body";
            bodyType = -1;
            break;
        }
      }
    }
    //Store selection
    switch (dropdownNumber) {
      case 1:
        make = element.id;
        break;
      case 2:
        model = element.id;
        break;
      case 3:
        fuelType = element.id;
        break;
      case 4:
        hpMin = parseInt(element.getAttribute("minHpValue"));
        hpMax = parseInt(element.getAttribute("maxHpValue"));
        break;
      case 5:
        yearMin = parseInt(element.getAttribute("startOfRange"));
        yearMax = parseInt(element.getAttribute("endOfRange"));
        break;
      case 6:
        bodyType = element.id;
        break;
    }

    updateButtonLink();

    clearTable();

    //fill cars table if 3 or more are selected
    if (dropdownNumber >= 3) {
      (async () => {
        try {
          const data = await getCars();
          fillTable(data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }

  // Close the dropdown
  toggleDropdown(dropdownNumber);
}

function clearTable() {
  const tbody = document.getElementById("cars-table-body");
  if (tbody) {
    string =
      lang === "de"
        ? "Wir konnten kein Fahrzeug zu Ihren Angaben finden"
        : "We could not find a vehicle to your specifications";
    if (make === -1) {
      string =
        lang === "de"
          ? "Bitte wählen sie einen Hersteller"
          : "Please choose a manufacturer";
    } else if (model === -1) {
      string =
        lang === "de"
          ? "Bitte wählen sie ein Modell"
          : "Please choose a model series";
    } else if (fuelType === -1) {
      string =
        lang === "de"
          ? "Bitte wählen sie eine Treibstoffart"
          : "Please choose a fuel type";
    }
    tbody.innerHTML = `<tr><td></td><td colspan="2" style="vertical-align: middle;">${string}</td></tr>`;
  }
}

// Clicking outside the dropdowns closes them
window.onclick = function (event) {
  if (!event.target.matches(".dropdown-button")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
        openDropdown.style.opacity = 0;

        document.getElementById("arrow" + (i + 1)).style.transform =
          "rotate(0deg) translateY(-50%)";
      }
    }
  }
};

async function getCars() {
  let linkBase =
    "https://cloudrun-webmware-001-iwrlbwjlca-ey.a.run.app/api/v2/Vehicles/vehicles/abstract-cars-l2?";
  let switcher =
    document
      .querySelector(".x_calculate_ui-wrapper")
      .childNodes[0].getAttribute("aria-selected") === "true";
  let url = linkBase;
  if (switcher) {
    url +=
      (model > 0 ? "&model_series_id=" + model : "") +
      (fuelType > 0 ? "&fuel_type_id=" + fuelType : "") +
      (hpMin > 0 ? "&performance_hp_from=" + hpMin : "") +
      (hpMax > 0 ? "&performance_hp_to=" + hpMax : "") +
      (yearMin > 0 ? "&production_from_year=" + yearMin : "") +
      (yearMax > 0 ? "&production_to_year=" + yearMax : "") +
      (bodyType > 0 ? "&body_type_id=" + bodyType : "");
  } else {
    url +=
      `&hsn=${document.getElementById("x_calculate_form-2-hsn-2").value}` +
      `&tsn=${document.getElementById("x_calculate_form-2-tsn-2").value}`;
  }
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function fillTable(data) {
  var tbody = document.getElementById("cars-table-body");
  if (tbody) {
    tbody.innerHTML = "";
    data.forEach((element) => {
      let rowHTML = `<tr id="to-${
        element.id
      }" class="only-small model-data"> <!-- This row is only for small screens -->
    <td colspan="100%">${element.fullNameDisplayedAs}</td>
    </tr>
    <tr id="tr-${element.id}" value = ${element.id}>
    <td>
    <input type="radio" name="selectRow" id="radio-${element.id}" value="${
        element.id
      }" onchange="selectRow(this)">
    <label for="radio-${element.id}"></label>
    </td>
    <td class="model-data">${element.fullNameDisplayedAs}</td>
    <td>${lang === "de" ? element.bodyTypeNameDe : element.bodyTypeNameEn}</td>
    <td>${element.performanceKw} kW / ${element.performanceHp} ${
        lang === "de" ? "PS" : "HP"
      }</td>
    <td>${element.productionFromYear} - ${
        element.productionToYear
          ? element.productionToYear
          : lang === "de"
          ? "heute"
          : "today"
      }</td>
    <td>${element.hsnTsnsDisplayed.join(";\r\n")}</td>
    </tr>`;
      tbody.insertAdjacentHTML("beforeend", rowHTML);

      let row = document.getElementById(`tr-${element.id}`);
      let label = row.querySelector(`label[for='radio-${element.id}']`);
      let smallRow = document.getElementById(`to-${element.id}`);
      [row, label, smallRow].forEach((element) =>
        element.addEventListener("click", () => selectRadio(element.id))
      );
    });
    if (data.length === 0) {
      tbody.innerHTML = `<tr><td colspan="2" style="text-align:center;">${
        lang === "de"
          ? "Wir konnten kein Fahrzeug zu Ihren Angaben finden"
          : "We could not find a vehicle to your specifications"
      }</td></tr>`;
    }
  }
}

function selectRadio(rowId) {
  let radio = document.getElementById(`radio-${getSecondPart(rowId)}`);
  radio.checked = true;
  selectRow(radio);
}

function selectRow(radioInput) {
  // Update the global variable with the selected row's ID
  abstractVehicleId = radioInput.value;
  // Remove highlight from all rows
  document.querySelectorAll("#cars-table-body tr").forEach((row) => {
    row.classList.remove("row-selected"); // Reset background color
  });
  document.querySelectorAll(".only-small").forEach((row) => {
    row.classList.remove("row-selected"); // Reset background color
  });
  // Highlight the selected row
  document
    .getElementById(`tr-${radioInput.value}`)
    .classList.add("row-selected"); // Change to desired color
  document
    .getElementById(`to-${radioInput.value}`)
    .classList.add("row-selected"); // Change to desired color
}

function generateQuoteLink() {
  linkBase =
    "/safe?" +  //FsCC.store.getConsents())} //{serialize(
    `locale=${Weglot.getCurrentLang()}`;
  if (
    document
      .querySelector(".x_calculate_ui-wrapper")
      .childNodes[0].getAttribute("aria-selected") === "true"
  ) {
    //if (abstractVehicleId < 0) { Vehicle id support not there yet
    return (
      linkBase +
      (make > 0 ? "&make=" + make : "") +
      (model > 0 ? "&model=" + model : "") +
      (fuelType > 0 ? "&fuelType=" + fuelType : "") +
      (hpMin > 0 ? "&minHpValue=" + hpMin : "") +
      (hpMax > 0 ? "&maxHpValue" + hpMax : "") +
      (yearMin > 0 ? "&yearFrom=" + yearMin : "") +
      (yearMax > 0 ? "&yearTo=" + yearMax : "") +
      (bodyType > 0 ? "&bodyType=" + bodyType : "")
    );
    //} else {
    //  return linkBase + "&vehicleId=" + abstractVehicleId;
    //}
  } else {
    return (
      linkBase +
      `&hsn=${document.getElementById("x_calculate_form-2-hsn-2").value}` +
      `&tsn=${document.getElementById("x_calculate_form-2-tsn-2").value}`
    );
  }
}

function getSecondPart(str) {
  return str.split("-")[1];
}

function updateButtonLink() {
  Array.from(document.querySelectorAll("a.x_calculate_button")).forEach(
    function (el) {
      el.href = generateQuoteLink();
    }
  );
}
