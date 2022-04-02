class Services {
  //calculate row number
  findRow(target: number) {
    let row: number;
    if (target <= 8) row = 1;
    else if (target > 8 && target <= 16) row = 2;
    else if (target > 16 && target <= 24) row = 3;
    else if (target > 24 && target <= 32) row = 4;
    else if (target > 32 && target <= 40) row = 5;
    else if (target > 40 && target <= 48) row = 6;
    else if (target > 48 && target <= 56) row = 7;
    else row = 8;
    return row;
  }

  //calculate column number
  findCol(target: number) {
    let col: number | undefined = undefined;
    const col_1: number[] = [1],
      col_2: number[] = [2],
      col_3: number[] = [3],
      col_4: number[] = [4],
      col_5: number[] = [5],
      col_6: number[] = [6],
      col_7: number[] = [7],
      col_8: number[] = [8];

    while (col_1.length < 8) {
      col_1.push(col_1[col_1.length - 1] + 8);
      col_2.push(col_2[col_2.length - 1] + 8);
      col_3.push(col_3[col_3.length - 1] + 8);
      col_4.push(col_4[col_4.length - 1] + 8);
      col_5.push(col_5[col_5.length - 1] + 8);
      col_6.push(col_6[col_6.length - 1] + 8);
      col_7.push(col_7[col_7.length - 1] + 8);
      col_8.push(col_8[col_8.length - 1] + 8);
    }
    col_1.forEach((item) => {
      if (item === target) return (col = 1);
    });
    if (!col)
      col_2.forEach((item) => {
        if (item === target) return (col = 2);
      });
    if (!col)
      col_3.forEach((item) => {
        if (item === target) return (col = 3);
      });
    if (!col)
      col_4.forEach((item) => {
        if (item === target) return (col = 4);
      });
    if (!col)
      col_5.forEach((item) => {
        if (item === target) return (col = 5);
      });
    if (!col)
      col_6.forEach((item) => {
        if (item === target) return (col = 6);
      });
    if (!col)
      col_7.forEach((item) => {
        if (item === target) return (col = 7);
      });
    if (!col)
      col_8.forEach((item) => {
        if (item === target) return (col = 8);
      });
    return col ? col : (col = 0);
  }

  //get all possible possition where knight can move;
  getPossiblePosition(row: number, col: number) {
    const possiblePosition: PossiblePosition[] = [];
    if (col >= 3 && col <= 6) {
      possiblePosition.push({ id: "1", row: row + 1, col: col - 2 });
      possiblePosition.push({ id: "3", row: row - 1, col: col - 2 });
      possiblePosition.push({ id: "2", row: row - 1, col: col + 2 });
      possiblePosition.push({ id: "4", row: row + 1, col: col + 2 });
    }
    if (col < 3) {
      possiblePosition.push({ id: "1", row: row - 1, col: col + 2 });
      possiblePosition.push({ id: "2", row: row + 1, col: col + 2 });
    }
    if (col > 6) {
      possiblePosition.push({ id: "1", row: row + 1, col: col - 2 });
      possiblePosition.push({ id: "3", row: row - 1, col: col - 2 });
    }

    if (row >= 3 && row <= 6) {
      if (col < 7) {
        possiblePosition.push({ id: "5", row: row - 2, col: col + 1 });
        possiblePosition.push({ id: "7", row: row + 2, col: col + 1 });
      }
      if (col >= 2) {
        possiblePosition.push({ id: "6", row: row - 2, col: col - 1 });
        possiblePosition.push({ id: "8", row: row + 2, col: col - 1 });
      }
    }
    if (row < 3) {
      possiblePosition.push({ id: "7", row: row + 2, col: col + 1 });
      possiblePosition.push({ id: "8", row: row + 2, col: col - 1 });
    }
    if (row > 6) {
      possiblePosition.push({ id: "5", row: row - 2, col: col + 1 });
      possiblePosition.push({ id: "6", row: row - 2, col: col - 1 });
    }
    return possiblePosition;
  }

  //convert all possition to number for showing UI;
  getPossibleValues(possiblePosition: PossiblePosition[]) {
    const possibleValues: Positions = {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
    };
    possiblePosition.forEach((item) => {
      if (item.row === 1) {
        possibleValues[item.id as keyof Positions] = item.col;
      } else if (item.row === 2) {
        possibleValues[item.id as keyof Positions] = item.col + 8;
      } else if (item.row === 3 && item.col !== 0 && item.col !== 9) {
        possibleValues[item.id as keyof Positions] = item.col + 16;
      } else if (item.row === 4 && item.col !== 0 && item.col !== 9) {
        possibleValues[item.id as keyof Positions] = item.col + 24;
      } else if (item.row === 5 && item.col !== 0 && item.col !== 9) {
        possibleValues[item.id as keyof Positions] = item.col + 32;
      } else if (item.row === 6 && item.col !== 0 && item.col !== 9) {
        possibleValues[item.id as keyof Positions] = item.col + 40;
      } else if (item.row === 7) {
        possibleValues[item.id as keyof Positions] = item.col + 48;
      } else if (item.row === 8) {
        possibleValues[item.id as keyof Positions] = item.col + 56;
      }
    });
    return possibleValues;
  }
}

export default Services;
