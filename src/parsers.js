import fs from 'fs';
import yaml from 'js-yaml';

const parsers = (absoluteFilepath) => {
  const file = fs.readFileSync(absoluteFilepath, 'utf8');
  const extension = absoluteFilepath.split('.')[1];
  let parsedFile;
  if (extension === 'json') {
    parsedFile = JSON.parse(file);
  }
  if (extension === 'yaml' || extension === 'yml') {
    parsedFile = yaml.load(file, 'utf8');
  }
  return parsedFile;
};

export default parsers;
