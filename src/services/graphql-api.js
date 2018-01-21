const url = 'http://localhost:4000/graphql';

export const get = async () => 
  await fetch(url + '?query={hello}')
    .then(res => res.json())
;