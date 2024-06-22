const BASE_URL = "http://localhost:3001";

const fetcher = async (url, config = {}) => {
  const response = await fetch(`${BASE_URL}/${url}`, config);
  const data = await response.json();
  return data;
};

export { fetcher };
