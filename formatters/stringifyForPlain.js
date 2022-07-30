import _ from 'lodash';

const stringifyForPlain = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }
  return _.isString(data) ? `'${data}'` : data;
};

export default stringifyForPlain;
