const rotate = matrix => {
  let j = 0;
  const dimen = matrix.length;
  for (let i = 0; i < dimen - (j * 2) - 1; i++) {
    const temp = matrix[j][i + j];
    matrix[j][i + j] = matrix[dimen - 1 - i - j][j]
    matrix[dimen - 1 - i - j][j] = matrix[dimen - 1 - j][dimen - 1 - i - j];
    matrix[dimen - 1 - j][dimen - 1 - i - j] = matrix[i + j][dimen - 1 - j]
    matrix[i + j][dimen - 1 - j] = temp;
  }
}

const rotateMatrix = matrix => {

};

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
rotate(matrix);
console.log(matrix);
