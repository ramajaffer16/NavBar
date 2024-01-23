const btn = document.querySelector('button');
const links = document.querySelector('ul');

btn.addEventListener('click', function(e){
  // if (links.classList.contains('show-links')){
  //   links.classList.remove('show-links');
  // }else if (!links.classList.contains('show-links')){
  //   links.classList.add('show-links');
  // }
  links.classList.toggle('show-links')
})