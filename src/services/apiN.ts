export async function fetchData() {
  // Здесь выполняется ваш запрос к внешнему API или базе данных
  const response = await fetch(
    'http://ec2-52-59-30-228.eu-central-1.compute.amazonaws.com/api/shop/',
  );
  const data = await response.json();
  // console.log(data)
  return data.results;
}
