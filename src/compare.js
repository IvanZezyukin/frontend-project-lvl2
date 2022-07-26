const newDiff = (obj1, obj2, path = '') => {
  const result = [];
  Object.entries(obj1).forEach(([key, value]) => {
    // логика для значения, внутри которого не объект
    if (typeof value !== 'object' || value === null) {
      // проверка, что есть точно такой же ключ и значение во втором объекте
      if (key in obj2) {
        if (value === obj2[key]) {
          result.push({
            prefix: '    ', key, value,
          });
        } else {
          // проверка что есть такой же ключ но значение по ключу не равно
          result.push({ prefix: '  - ', key, value });
          // TODO разобраться с преобразованием в текст, тк падало на null
          result.push({
            prefix: '  + ', key, value: String(obj2[key]), change: 'updated', oldValue: value, plainFormat: true, hasChild: false, path,
          });
        }
      }
      // проверка, что ключ удален во втором объекте
      if (!(key in obj2)) {
        result.push({
          prefix: '  - ', key, value, change: 'removed', plainFormat: true, hasChild: false, path,
        });
      }
    } else {
      // ниже логика для значений, внутри которых содержится объект
      if (key in obj2) {
        if (typeof obj2[key] === 'object') {
          result.push({
            prefix: '    ', key, value: newDiff(value, obj2[key], path += key),
          });
        } else {
          // что делаем если в первом объект, а во втором не объект
          result.push({ prefix: '  - ', key, value: newDiff(value, value, path += key) });
          result.push({
            prefix: '  + ', key, value: obj2[key], change: 'updated', plainFormat: true, oldValue: value, hasChild: false, path,
          });
        }
      }
      // если ключ удален
      if (!(key in obj2)) {
        result.push({
          prefix: '  - ', key, value: newDiff(value, value, path += key), change: 'removed', plainFormat: true, path,
        });
      }
    }
  });
  // проверка на новые ключи
  Object.entries(obj2).forEach(([key, value]) => {
    if (!(key in obj1)) {
      if (typeof value === 'object') {
        result.push({
          prefix: '  + ', key, value: newDiff(value, value, path += key), change: 'added', plainFormat: true,
        });
      } else {
        result.push({
          prefix: '  + ', key, value, change: 'added', plainFormat: true,
        });
      }
    }
  });
  return result;
};

export default newDiff;
