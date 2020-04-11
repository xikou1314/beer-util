const url = require('../../src/url/index');

describe('url -> parse', () => {
  const obj = {
    'auth': '',
    'hash': '',
    'host': 'localhost',
    'hostname': 'localhost',
    'href': 'http://localhost/',
    'origin': 'http://localhost', 
    'password': '', 'pathname': '/', 
    'port': '', 'protocol': 'http:', 
    'query': {}, 
    'slashes': true, 
    'username': ''};
  test('parse -> true', () => {
    expect(url.parse('http://localhost/')).toMatchObject(obj);
  });
});

describe('url -> parseQuery', () => {
  const obj = {name: '1', password: '2'};
  test('parseQuery -> true', () => {
    expect(url.parseQuery('http://localhost/?name=1&password=2')).toMatchObject(obj);
  });
});