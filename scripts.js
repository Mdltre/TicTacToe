let boxDict = {};
let boxCount = 9;
let turn = "x";
let isdraw = false;

const boxCont1 = document.getElementById("boxCont1");
const boxCont2 = document.getElementById("boxCont2");
const boxCont3 = document.getElementById("boxCont3");
const showInfo = document.getElementById("showInfo");

function getBoxes(dict, count) {
    for (let i = 1; i <= count; i++) {
      dict[`box${i}`] = [document.getElementById(`box${i}`), false];
    }
  }
  getBoxes(boxDict, boxCount);

function setClickListener(dict, count) {
  for (let i = 1; i <= count; i++) {
    dict[`box${i}`][0].addEventListener("click", () => {
      if (turn === "x" && dict[`box${i}`][1] === false) {
        dict[`box${i}`][0].innerHTML = `x`;
        turn = "o";
        setInfoText("Turn: o");
      } else if (turn === "o" && dict[`box${i}`][1] === false) {
        dict[`box${i}`][0].innerHTML = `o`;
        turn = "x";
        setInfoText("Turn: x");
      }
      dict[`box${i}`][1] = true;
      checkWin(dict);
    });
  }
}
setClickListener(boxDict, boxCount);
  
  function setInfoText(text) {
    showInfo.innerHTML = `${text}`;
  }


  function checkWin(dict) {
    let isBoardFull = true;
  
    for (let i = 1; i <= boxCount; i++) {
      if (dict[`box${i}`][0].innerHTML === '') {
        isBoardFull = false;
        break;
      }
    }
  
    if (isBoardFull) {
      setInfoText("It's a draw!");
      window.alert("It's a draw!");
      isdraw = true;
    }
    else if (
        (dict[`box${1}`][0].innerHTML === "x" &&
          dict[`box${2}`][0].innerHTML === "x" &&
          dict[`box${3}`][0].innerHTML === "x") ||
        (dict[`box${4}`][0].innerHTML === "x" &&
          dict[`box${5}`][0].innerHTML === "x" &&
          dict[`box${6}`][0].innerHTML === "x") ||
        (dict[`box${7}`][0].innerHTML === "x" &&
          dict[`box${8}`][0].innerHTML === "x" &&
          dict[`box${9}`][0].innerHTML === "x") ||
        (dict[`box${1}`][0].innerHTML === "x" &&
          dict[`box${4}`][0].innerHTML === "x" &&
          dict[`box${7}`][0].innerHTML === "x") ||
        (dict[`box${2}`][0].innerHTML === "x" &&
          dict[`box${5}`][0].innerHTML === "x" &&
          dict[`box${8}`][0].innerHTML === "x") ||
        (dict[`box${3}`][0].innerHTML === "x" &&
          dict[`box${6}`][0].innerHTML === "x" &&
          dict[`box${9}`][0].innerHTML === "x") ||
        (dict[`box${1}`][0].innerHTML === "x" &&
          dict[`box${5}`][0].innerHTML === "x" &&
          dict[`box${9}`][0].innerHTML === "x") ||
        (dict[`box${3}`][0].innerHTML === "x" &&
          dict[`box${5}`][0].innerHTML === "x" &&
          dict[`box${7}`][0].innerHTML === "x")
      ) {
      setInfoText("x won!");
      markWinningLine('x', dict);
      window.alert("x won!");
    }
    else if (
        (dict[`box${1}`][0].innerHTML === "o" &&
        dict[`box${2}`][0].innerHTML === "o" &&
        dict[`box${3}`][0].innerHTML === "o") ||
      (dict[`box${4}`][0].innerHTML === "o" &&
        dict[`box${5}`][0].innerHTML === "o" &&
        dict[`box${6}`][0].innerHTML === "o") ||
      (dict[`box${7}`][0].innerHTML === "o" &&
        dict[`box${8}`][0].innerHTML === "o" &&
        dict[`box${9}`][0].innerHTML === "o") ||
      (dict[`box${1}`][0].innerHTML === "o" &&
        dict[`box${4}`][0].innerHTML === "o" &&
        dict[`box${7}`][0].innerHTML === "o") ||
      (dict[`box${2}`][0].innerHTML === "o" &&
        dict[`box${5}`][0].innerHTML === "o" &&
        dict[`box${8}`][0].innerHTML === "o") ||
      (dict[`box${3}`][0].innerHTML === "o" &&
        dict[`box${6}`][0].innerHTML === "o" &&
        dict[`box${9}`][0].innerHTML === "o") ||
      (dict[`box${1}`][0].innerHTML === "o" &&
        dict[`box${5}`][0].innerHTML === "o" &&
        dict[`box${9}`][0].innerHTML === "o") ||
      (dict[`box${3}`][0].innerHTML === "o" &&
        dict[`box${5}`][0].innerHTML === "o" &&
        dict[`box${7}`][0].innerHTML === "o")
    ) {
      setInfoText("o won!");
      markWinningLine('o', dict);
      window.alert("o won!");
    }
  }
  
  function markWinningLine(player, dict) {
    const lines = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9],
      [1, 4, 7], [2, 5, 8], [3, 6, 9],
      [1, 5, 9], [3, 5, 7]             
    ];
  
    for (const line of lines) {
      const [a, b, c] = line;
      if (
        dict[`box${a}`][0].innerHTML === player &&
        dict[`box${b}`][0].innerHTML === player &&
        dict[`box${c}`][0].innerHTML === player
      ) {
        for (const box of line) {
            dict[`box${box}`][0].style.backgroundColor = 'red';
        }
      }
    }
  }
  
  
  
  
  
  