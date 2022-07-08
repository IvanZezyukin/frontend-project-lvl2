import fs from 'fs';

const parsers = (absoluteFilepath) => {
  const file = fs.readFileSync(absoluteFilepath, 'utf8');
  const extension = absoluteFilepath.split('.')[1];
  let parsedFile;
  if (extension === 'json') {
    parsedFile = JSON.parse(file);
  }
  return parsedFile;
};

export default parsers;
