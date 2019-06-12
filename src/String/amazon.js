class Distance {
  constructor(found, distance) {
    this.found = found;
    this.distance = distance;
  }

  isFound() {
    return this.found;
  }

  getDistance() {
    return this.distance;
  }
}

const hasPath = (path, initRow, initColumn) => {
  return path.has(`${initRow}-${initColumn}`);
}

const isValidSpace = (lot, row, column, path) => {
  return row >= 0
    && column >= 0
    && row < lot.length
    && row < lot[row].length
    && lot[row][column] !== 0
    && !hasPath(path, row, column);
}

const filterPath = (paths) => {
  let bestPath = new Distance(false, 0);
  for (let i = 0; i < paths.length; i++) {
    const element = paths[i];
    if (element.isFound() && element.getDistance() > bestPath.getDistance()) {
      bestPath = element;
    }
  }
  return bestPath
}

const savePath = (path, initRow, initColumn) => {
  path.set(`${initRow}-${initColumn}`, 1);
}

const findOptimalPath = (lot, initRow, initColumn, distance, path) => {

  if (!isValidSpace(lot, initRow, initColumn, path)) {
    return new Distance(false, distance);
  }
  if (lot[initRow][initColumn] === 9) {
    return new Distance(true, distance);
  }

  savePath(path, initRow, initColumn);
  const bottomPath = findOptimalPath(lot, initRow + 1, initColumn, distance + 1, path);
  const topPath = findOptimalPath(lot, initRow - 1, initColumn, distance + 1, path);
  const rightPath = findOptimalPath(lot, initRow, initColumn + 1, distance + 1, path);
  const leftPath = findOptimalPath(lot, initRow, initColumn - 1, distance + 1, path);

  //path.clear();
  return filterPath([bottomPath, topPath, rightPath, leftPath]);
}

console.log(findOptimalPath([[1, 1, 0], [1, 1, 0], [0, 9, 0]], 0, 0, 0, new Map()));