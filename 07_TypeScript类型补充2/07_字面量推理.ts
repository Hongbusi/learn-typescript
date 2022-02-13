// const info = {
//   name: 'hbs',
//   age: 18
// }

// info.name = 'bsh';

type Method = 'GET' | 'POST';
function request(url: string, method: Method) {

}

// type Request = {
//   url: string,
//   method: Method
// }

const options = {
  url: 'url',
  method: 'POST'
} as const;

request(options.url, options.method as Method);

export {}
