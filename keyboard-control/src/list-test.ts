import ansiEscapes from "ansi-escapes";
import { ScrollList } from "./scroll-list.js";
import readline from "node:readline";

readline.emitKeypressEvents(process.stdin);

process.stdin.setRawMode(true);

const list = new ScrollList([
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
]);

process.stdin.on("keypress", (str, key) => {
  if (key.sequence === "\u0003") {
    process.stdout.write(ansiEscapes.clearTerminal);
    process.exit();
  }

  list.onKeyInput(key.name);
});
