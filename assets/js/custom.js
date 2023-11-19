
// Section icons like titles with self anchor link
document.querySelectorAll('.section__icon').forEach(icon => {
  icon.addEventListener('click', e => {
    const id = e.target.closest('.section').id
    window.location.hash = id
  })
})
