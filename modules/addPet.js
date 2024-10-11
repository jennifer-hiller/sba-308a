const resultsDiv = document.getElementById("results");

export default async function addPet(type, name, status) {
  const response = await axios.post("https://petstore.swagger.io/v2/pet", {
    id: 0,
    category: {
      id: 0,
      name: type,
    },
    name,
    status,
  });
  const data = response.data;
  resultsDiv.innerHTML = `
    <h2>Name: ${data.name}</h2>
    <p>${data.category.name}</p>
    <p>Status: ${data.status}</p>
  `;
}
