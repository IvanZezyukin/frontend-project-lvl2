# GenDiff
### About
Compares two json/yaml files and shows a difference. Was done as a study project №2 on JavaScrip course of Hexlet.

### Usage
```shell
gendiff -f plain <filepath1> <filepath2>
```

### Result example
```shell
Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to [complex value]
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From 'too much' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]
```

### Hexlet tests and linter status
[![Actions Status](https://github.com/IvanZezyukin/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/IvanZezyukin/frontend-project-lvl2/actions)

### CodeClimate bages
[![Maintainability](https://api.codeclimate.com/v1/badges/78beace51748336e74e5/maintainability)](https://codeclimate.com/github/IvanZezyukin/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/78beace51748336e74e5/test_coverage)](https://codeclimate.com/github/IvanZezyukin/frontend-project-lvl2/test_coverage)

### My tests and linter status
[![compare-test](https://github.com/IvanZezyukin/frontend-project-lvl2/actions/workflows/compare-test.yml/badge.svg?branch=main)](https://github.com/IvanZezyukin/frontend-project-lvl2/actions/workflows/compare-test.yml)
