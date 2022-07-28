import getDeleted from './getDeleted.js';
import getAdded from './getAdded.js';
import getUpdated from './getUpdated.js';
import getTheSame from './getTheSame.js';
import getParentStatus from './getParentStatus.js';

const newDiff = (arr1, arr2) => {
  const deleted = getDeleted(arr1, arr2);
  const added = getAdded(arr1, arr2);
  const updated = getUpdated(arr1, arr2);
  const same = getTheSame(arr1, arr2);
  const diff = [...deleted, ...added, ...updated, ...same];
  const sortedDiff = diff.sort((a, b) => a.path.localeCompare(b.path));
  return sortedDiff.map((obj) => ({ ...obj, parentSameStatus: getParentStatus(obj, sortedDiff) === obj.status, wasParentUpdated: getParentStatus(obj, sortedDiff) === 'updated' }));
};

export default newDiff;
