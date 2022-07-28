const getPrefix = (status, parentSameStatus, wasParentUpdated) => {
  let result;
  if (status === 'added' && parentSameStatus === false) {
    result = '  + ';
  } else if (status === 'deleted' && parentSameStatus === false && wasParentUpdated === false) {
    result = '  - ';
  } else if (status === 'changed' && wasParentUpdated === true) {
    result = '    ';
  } else if (status === 'deleted' && parentSameStatus === true && wasParentUpdated === false) {
    result = '    ';
  } else {
    result = '    ';
  }
  return result;
};

export default getPrefix;
