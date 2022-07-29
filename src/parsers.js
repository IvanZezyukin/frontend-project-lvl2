import fs from 'fs';
import yaml from 'js-yaml';

// eslint-disable-next-line consistent-return
const parsers = (absoluteFilepath) => {
  const file = fs.readFileSync(absoluteFilepath, 'utf8');
  const extension = absoluteFilepath.split('.')[1];
  if (extension === 'json') {
    return JSON.parse(file);
  }
  if (extension === 'yaml' || extension === 'yml') {
    return yaml.load(file, 'utf8');
  }
};

export default parsers;
