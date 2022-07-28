import getValue from './getValue.js';

const plain = (compared) => {
  const filtred = compared.filter((obj) => obj.status === 'added' || obj.status === 'deleted' || obj.status === 'updated');
  const result = [];
  filtred.forEach((obj) => {
    if (obj.status === 'added' && obj.parentSameStatus === false) {
      result.push(`Property '${obj.path}' was added with value: ${getValue(obj.value)}`);
    }
    if (obj.status === 'deleted' && obj.parentSameStatus === false && obj.wasParentUpdated === false) {
      result.push(`Property '${obj.path}' was removed`);
    }
    if (obj.status === 'updated' && obj.parentSameStatus === false) {
      result.push(`Property '${obj.path}' was updated. From ${getValue(obj.oldValue)} to ${getValue(obj.value)}`);
    }
  });
  return result.join('\n');
};

export default plain;
