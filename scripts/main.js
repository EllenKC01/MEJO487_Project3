$(document).ready(function () {
  console.log("ready");
  loadData();
});

function loadData() {
  $.getJSON("data/data.json", function (data) {
    console.log(data);
    parseData(data);
    parseAges(data);
  });
  $.getJSON("data/States2021.json", function (table) {
    console.log(table);
    parseStates(table);
    createTable(table);
  });
}

var barReceived2020 = [];
var barNeeded2020 = [];
var barReceived2021 = [];
var barNeeded2021 = [];
// help from https://stackoverflow.com/questions/52716755/use-array-from-json-for-category-axis-in-c3-js
var datas1 = { Needed: [barNeeded2020], Received: [barReceived2020] };
var datas2 = { Needed: [barNeeded2021], Received: [barReceived2021] };

//listing data from Needed and Recieved data over the three phases of september (national estimates)
function parseData(data) {
  for (let i = 0; i < 6; i += 2) {
    barReceived2020 += data[i].Value + ", ";
  }
  console.log(barReceived2020);
  for (let i = 1; i < 6; i += 2) {
    barNeeded2020 += data[i].Value + ", ";
  }
  console.log(barNeeded2020);
  for (let i = 6; i < 12; i += 2) {
    barReceived2021 += data[i].Value + ", ";
  }
  console.log(barReceived2021);
  for (let i = 7; i < 12; i += 2) {
    barNeeded2021 += data[i].Value + ", ";
  }
  console.log(barNeeded2021);
  console.log(datas1.Needed);
}

var chart = c3.generate({
  bindto: "#chart1",
  data: {
    // columns: [
    //   ["Needed", [datas1.Needed]],
    //   ["Received", [datas1.Received]],
    // ],
    columns: [
      ["Needed", 9.7, 10.4, 9.7],
      ["Received", 9.1, 9, 9],
    ],
    type: "line",
    colors: {
      Needed: "#d65d31",
      Received: "#6e455d",
    },
  },
  axis: {
    y: {
      max: 12,
      label: {
        text: "Percentage",
        position: "outer-middle",
      },
    },
  },
});

var chart = c3.generate({
  bindto: "#chart2",
  data: {
    // columns: [
    //   ["Needed", [datas1.Needed]],
    //   ["Received", [datas1.Received]],
    // ],
    columns: [
      ["Needed", 11.3, 11.6, 11],
      ["Received", 10.3, 10.2, 10.5],
    ],
    type: "line",
    colors: {
      Needed: "#d65d31",
      Received: "#6e455d",
    },
  },
  axis: {
    y: {
      max: 12,
      label: {
        text: "Percentage",
        position: "outer-middle",
      },
    },
  },
});

var agesNeeded2020 = [];
var agesReceived2020 = [];
var agesNeeded2021 = [];
var agesReceived2021 = [];
var datas3 = { Needed: [agesNeeded2020], Received: [agesReceived2020] };
var datas4 = { Needed: [agesNeeded2021], Received: [agesReceived2021] };

//listing data from Needed and Recieved data in phase 1 of september by age
function parseAges(data) {
  for (let i = 24; i < 31; i++) {
    agesNeeded2020 += data[i].Value + ", ";
  }
  console.log(agesNeeded2020);
  for (let i = 31; i < 38; i++) {
    agesReceived2020 += data[i].Value + ", ";
  }
  console.log(agesReceived2020);
  for (let i = 66; i < 73; i++) {
    agesNeeded2021 += data[i].Value + ", ";
  }
  console.log(agesNeeded2021);
  for (let i = 73; i < 80; i++) {
    agesReceived2021 += data[i].Value + ", ";
  }
  console.log(agesReceived2021);
  console.log(datas3);
}

var chart = c3.generate({
  bindto: "#chart3",
  data: {
    // columns: [
    //   ["Needed", [datas3.Needed]],
    //   ["Received", [datas3.Received]],
    // ],
    columns: [
      ["Needed", 15.9, 13.8, 11.2, 7.6, 5.3, 3.3, 3.5],
      ["Received", 13, 12.4, 10.5, 8.1, 5.9, 3.7, 3.5],
    ],
    type: "bar",
    colors: {
      Needed: "#d65d31",
      Received: "#6e455d",
    },
  },
  axis: {
    y: {
      max: 20,
      label: {
        text: "Percentage",
        position: "outer-middle",
      },
    },
    x: {
      type: "category",
      categories: ["18-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80+"],
    },
  },
});

var chart = c3.generate({
  bindto: "#chart4",
  data: {
    // columns: [
    //   ["Needed", [datas4.Needed]],
    //   ["Received", [datas4.Received]],
    // ],
    columns: [
      ["Needed", 20.8, 16.1, 13.2, 9.3, 5.7, 3, 3.3],
      ["Received", 15.6, 14.5, 11.9, 8.8, 6.3, 5.3, 3.2],
    ],
    type: "bar",
    colors: {
      Needed: "#d65d31",
      Received: "#6e455d",
    },
  },
  axis: {
    y: {
      max: 20,
      label: {
        text: "Percentage",
        position: "outer-middle",
      },
    },
    x: {
      type: "category",
      categories: ["18-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80+"],
    },
  },
});

var dataTable = [];

function parseStates(table) {
  for (let i = 0; i < table.length; i++) {
    dataTable += "['" + table[i].State + "', '" + table[i].Value + "'],";
  }
  console.log(dataTable);
}

//help from https://codezup.com/jquery-datatables-example-with-json-data/amp/
function createTable(table) {
  $(document).ready(function () {
    $("#myTable").DataTable({
      data: table,
      columns: [
        { data: "Indicator" },
        { data: "Group" },
        { data: "State" },
        { data: "Subgroup" },
        { data: "Phase" },
        { data: "Time Period" },
        { data: "Time Period Label" },
        { data: "Time Period Start Date" },
        { data: "Time Period End Date" },
        { data: "Value" },
      ],
    });
  });
}
