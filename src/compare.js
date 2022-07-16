const newDiff = (obj1, obj2) => {
  const result = [];
  Object.entries(obj1).map(([key, value]) => {
    let prefix = '';
    // логика для значения, внутри которого не объект
    if (typeof value !== 'object' || value === null) {
      // проверка, что есть точно такой же ключ и значение во втором объекте
      if (key in obj2) {
        if (value === obj2[key]) {
          result.push({prefix: '    ', key: key, value: value});
        } else {
          // проверка что есть такой же ключ но значение по ключу не равно
          result.push({prefix: '  - ', key: key, value: value});
          // TODO разобраться с преобразованием в текст, тк падало на null
          result.push({prefix: '  + ', key: key, value: String(obj2[key])});
        }
      }
      // проверка, что ключ удален во втором объекте
      if (!(key in obj2)) {
        result.push({prefix: '  - ', key: key, value: value});
      }
    } else {
      // ниже логика для значений, внутри которых содержится объект
      if (key in obj2) {
        if (typeof obj2[key] === 'object') {
          result.push({prefix: '    ', key: key, value: newDiff(value, obj2[key])});
        } else {
          // что делаем если в первом объект, а во втором не объект
          result.push({prefix: '  - ', key: key, value: newDiff(value, value)});
          result.push({prefix: '  + ', key: key, value: obj2[key]});
        }
      }
      // если ключ удален
      if (!(key in obj2)) {
        result.push({prefix: '  - ', key: key, value: newDiff(value, value)});
      }
    }
  });
  // проверка на новые ключи
  Object.entries(obj2).map(([key, value]) => {
    if (!(key in obj1)) {
      if (typeof value === 'object') {
        result.push({prefix: '  + ', key: key, value: newDiff(value, value)});
      } else {
        result.push({prefix: '  + ', key: key, value: value});
      }
    }
  });
  return result;
};

export default newDiff;
