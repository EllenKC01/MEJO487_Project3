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

var barRecieved2020 = ["Recieved"];
var barNeeded2020 = ["Needed"];
var barRecieved2021 = ["Recieved"];
var barNeeded2021 = ["Needed"];
// help from https://stackoverflow.com/questions/52716755/use-array-from-json-for-category-axis-in-c3-js
var datas1 = { Needed: [barNeeded2020], Recieved: [barRecieved2020] };
var datas2 = { Needed: [barNeeded2021], Recieved: [barRecieved2021] };

function parseData(data) {
  for (let i = 0; i < 6; i += 2) {
    barRecieved2020 += data[i].Value + ", ";
  }
  console.log(barRecieved2020);
  for (let i = 1; i < 6; i += 2) {
    barNeeded2020 += data[i].Value + ", ";
  }
  console.log(barNeeded2020);
  for (let i = 6; i < 12; i += 2) {
    barRecieved2021 += data[i].Value + ", ";
  }
  console.log(barRecieved2021);
  for (let i = 7; i < 12; i += 2) {
    barNeeded2021 += data[i].Value + ", ";
  }
  console.log(barNeeded2021);
}

var chart = c3.generate({
  bindto: "#chart1",
  data: {
    columns: [[datas1.Needed], [datas1.Recieved]],
    type: "bar",
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

var chart = c3.generate({
  bindto: "#chart2",
  data: {
    columns: [[datas1.Needed], [datas1.Recieved]],
    type: "bar",
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

var chart = c3.generate({
  bindto: "#chart3",
  data: {
    columns: [
      ["data1", 30, 200, 100, 400, 150, 250],
      ["data2", 50, 20, 10, 40, 15, 25],
    ],
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
