const selectedPet = document.getElementById("selectedPet");
export default async function getPet(href) {
  try {
    const result = await axios.get(href);
    const data = result.data;
    selectedPet.innerHTML = `
    <h2>${data.name}</h2>
    <p>Type: ${data.category.name}</p>
  `;
  } catch (e) {
    selectedPet.innerHTML = `
      <h2 style="color: red">There has been an error finding this pet</h2>
      <p>${e}</p>
    `;
  }
}
