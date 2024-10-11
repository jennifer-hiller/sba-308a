import addPet from "./modules/addPet.js";
import getAvailablePets from "./modules/getAvailablePets.js";
import getPet from "./modules/getPet.js";

const petForm = document.getElementById("petForm");
petForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  addPet(formData.get("type"), formData.get("name"), formData.get("status"));
});

const availablePets = document.getElementById("availablePets");
availablePets.addEventListener("click", (e) => {
  getAvailablePets();
});
const availablePetsList = document.getElementById("availablePetsList");
availablePetsList.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.localName === "a") {
    getPet(e.target.getAttribute("href"));
  }
});
