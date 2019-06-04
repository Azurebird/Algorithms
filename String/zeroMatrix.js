const memory = new Map();

const saveMemory = (row, column) => {
  if(!memory.has(row)) {
    const columnMap = new Map();
    columnMap.set(column, 1);
    memory.set(row, columnMap);
  } else if (!memory.get(row).has(column)) {
    memory.get(row).set(column, 1);
  }
}

const hasMemory = (row, column) => {
  return memory.has(row) && memory.get(row).has(column);
}

const shouldSaveInMemory = (matrix, row, column) => {
  if (matrix[row][column] !== 0) {
    saveMemory(row, column);
  }
}

const markZeroes = (matrix, row, column) => {
  for (let i = 0; i < matrix.length; i++) {
    shouldSaveInMemory(matrix, i, column);
    matrix[i][column] = 0;
  }
  for (let i = 0; i < matrix[row].length; i++) {
    shouldSaveInMemory(matrix, row, i);
    matrix[row][i] = 0;
  }
}

const zeroMatrix = matrix => {
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      const element = matrix[row][column];
      if (element === 0 && !hasMemory(row, column)) {
        saveMemory(row, column);
        markZeroes(matrix, row, column);
      }
    }
  }
}

const matrix = [
  [0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0],
];

console.log(matrix);
zeroMatrix(matrix);
console.log(matrix);