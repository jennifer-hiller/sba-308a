const availablePets = document.getElementById("availablePetsList");

export default async function getAvailablePets() {
  const result = await axios.get(
    "https://petstore.swagger.io/v2/pet/findByStatus?status=available"
  );
  const data = result.data;
  availablePets.innerHTML = "";
  data.forEach((pet) => {
    if (pet.id < 10000000) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.setAttribute("href", `https://petstore.swagger.io/v2/pet/${pet.id}`);
      a.innerHTML = pet.name + " " + pet.id;
      li.appendChild(a);
      availablePets.appendChild(li);
    }
  });
}
