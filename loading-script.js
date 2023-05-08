const loading = document.querySelector(".load");
window.onload = () => {
  loading.style.display = "none";
};
window.onbeforeunload = () => {
  loading.style.display = "block";
};
