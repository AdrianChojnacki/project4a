const header1 = document.querySelector(`#header1`);
const header2 = document.querySelector(`#header2`);
const header3 = document.querySelector(`#header3`);

document.body.addEventListener(`mousemove`, (e) => {
  header1.textContent = `${e.clientX}, ${e.clientY}`;
  header2.textContent = `${e.pageX}, ${e.pageY}`;
  header3.textContent = `${e.screenX}, ${e.screenY}`;
});
