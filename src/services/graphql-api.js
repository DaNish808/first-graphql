const url = 'http://localhost:4000/graphql';

/*******************************
  use example:
    const data = await get`
      query: {
        thing1,
        thing2 {
          subThing,
          another
        },
        thing3
      };
    `
********************************/
export function get([input]) {
  return fetch(url + formatQuery(input))
    .then(res => res.json());
}


function formatQuery(queryStr) {
  return queryStr
    .replace(/\s/g, '')
    .replace(/query:/, '?query=');
}