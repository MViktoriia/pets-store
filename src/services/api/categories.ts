import { instance } from './auth';


async function fetchCategories  () {
  const data = await instance.get(`/shop/`);
  console.log(data.data.results)
  if(data){
    return data.data.results;
  }
};

export default fetchCategories;