// <=> public 
export function handleFormSubmit() {
  document.querySelector("#add-row-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Empêche le rechargement de la page lors du submit
    // Récupérer les données du formulaire
    const formData = new FormData(event.target);
    // TODO: Ajouter la ligne au json...
    // Ajouter une nouvelle ligne au tableau en appelant addRow
    addRow(formData.get("firstname"), formData.get("lastname"), formData.get("email"));
  });
}