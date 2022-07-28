import getPrefix from './getPrefix.js';

const stylish = (sortedDiffWithParentStatus) => {
  const collapseEntries = (arr, parent = '') => {
    const result = [];
    arr.forEach((obj) => {
      if (obj.parent === parent) {
        result.push({ ...obj, children: collapseEntries(sortedDiffWithParentStatus, obj.path) });
      }
    });
    return result;
  };
  const collapsed = collapseEntries(sortedDiffWithParentStatus);
  const stylishText = (arr, spaces = 0) => {
    let result = '';
    result += '{\n';
    arr.forEach((obj) => {
      if (obj.status === 'updated') {
        result += `${'    '.repeat(spaces)}  - ${obj.key}:${Array.isArray(obj.children) && obj.children.length !== 0 ? ` ${stylishText(obj.children, spaces + 1)}` : `${obj.oldValue === '' ? '' : ` ${obj.oldValue}`}`}\n`;
        result += `${'    '.repeat(spaces)}  + ${obj.key}:${Array.isArray(obj.value) && obj.value.length !== 0 ? ` ${stylishText(obj.value, spaces + 1)}` : `${obj.value === '' ? '' : ` ${obj.value}`}`}\n`;
      } else {
        result += `${'    '.repeat(spaces)}${getPrefix(obj.status, obj.parentSameStatus, obj.wasParentUpdated)}${obj.key}:${Array.isArray(obj.children) && obj.children.length !== 0 ? ` ${stylishText(obj.children, spaces + 1)}` : `${obj.value === '' ? '' : ` ${obj.value}`}`}\n`;
      }
    });
    result += `${'    '.repeat(spaces)}}`;
    return result;
  };
  return stylishText(collapsed);
};

export default stylish;
