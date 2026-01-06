const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

addBtn.addEventListener("click", () => {
  const text = input.value.trim();

  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  // Supprimer au clic
  li.addEventListener("click", () => {
    li.remove();
  });

  list.appendChild(li);
  input.value = "";
});
