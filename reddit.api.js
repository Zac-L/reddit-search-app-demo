

export default {
  search: (searchTerm, searchLimit, sortBy) => {
    return fetch(`http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`)
      .then(res => res.json())
      .then(data => data.data.children.map(data => data.data))
      .catch(error => console.log(error));
  }
};