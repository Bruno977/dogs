const btnFilterStore = document.querySelector("[data-btn-filter]");
const containerSidebarStore = document.querySelector(".sidebar-menu");

function clickFilterStore() {
  containerSidebarStore.classList.add("active");
}

btnFilterStore.addEventListener("click", clickFilterStore);
