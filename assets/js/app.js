const body = document.querySelector('body');
  const toggle = document.querySelector('.dark-mode__slider');
  toggle.onclick = function () {
    toggle.classList.toggle('active');
    if(toggle.classList.contains('active')){
      body.classList.add('dark-theme')
    }
    else{
      body.classList.remove('dark-theme')
    }
}