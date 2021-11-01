$(document).ready(function () {
  console.log("ready");
  loadData();
});

function loadData() {
  $.getJSON("data/data.json", function (data) {
    console.log(data);
    parseData(data);
  });
}

var barReceived2020 = ["Received"];
var barNeeded2020 = ["Needed"];
var barReceived2021 = ["Received"];
var barNeeded2021 = ["Needed"];
// help from https://stackoverflow.com/questions/52716755/use-array-from-json-for-category-axis-in-c3-js
var datas1 = { Needed: [barNeeded2020], Received: [barReceived2020] };
var datas2 = { Needed: [barNeeded2021], Received: [barReceived2021] };

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
    // columns: [[datas1.Needed], [datas1.Received]],
    columns: [
      ["Needed", 9.7, 10.4, 9.7],
      ["Received", 9.1, 9, 9],
    ],
    type: "line",
  },
  colors: {
    Needed: "#d65d31",
    Received: "#6e455d",
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
    // columns: [[datas1.Needed], [datas1.Received]],
    columns: [
      ["Needed", 11.3, 11.6, 11],
      ["Received", 10.3, 10.2, 10.5],
    ],
    type: "line",
  },
  colors: {
    Needed: "#d65d31",
    Received: "#6e455d",
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
  bindto: "#chart3",
  data: {
    columns: [
      ["Needed", 30, 200, 100, 400, 150, 250],
      ["Received", 50, 20, 10, 40, 15, 25],
    ],
    type: "bar",
  },
  colors: {
    Needed: "#d65d31",
    Received: "#6e455d",
  },
  axis: {
    y: {
      label: {
        text: "Percentage",
        position: "outer-middle",
      },
    },
  },
});
