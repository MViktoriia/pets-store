import { instance } from './auth';


async function fetchCategories  () {
  console.log('hi')
  const data = await instance.get(`/shop/`);
  console.log(data)
  return data;
};

export default fetchCategories;