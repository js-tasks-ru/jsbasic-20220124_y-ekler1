function toggleText() {
  let togButton = document.querySelector(".toggle-text-button");

     togButton.addEventListener('click', (e) => {
       let text = e.target.nextElementSibling;

       text.hidden = !text.hidden
     })
}
