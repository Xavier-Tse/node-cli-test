const blessed = require("blessed");

const screen = blessed.screen({
  fullUnicode: true,
});

const data = [
  "select 1",
  "select 2",
  "select 3",
  "select 4",
  "select 5",
  "select 6",
  "select 7",
  "select 8",
  "select 9",
  "select 10",
];

const list = blessed.list({
  width: "50%",
  height: "50%",
  border: "line",
  label: "列表",
  align: "left",
  right: 0,
  bottom: 0,
  keys: true,
  mouse: true,
  style: {
    fg: "white",
    bg: "default",
    selected: {
      bg: "blue",
    },
  },
  items: data,
});

screen.append(list);

list.select(0);

list.on("select", function (item) {
  screen.destroy();

  console.log(item.getText());
});

screen.key("C-c", function () {
  screen.destroy();
});

list.focus();

screen.render();
