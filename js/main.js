// MODAL WINDOW
(function(){
  const itemModelClick = document.querySelector('.links__list').children;
  const modelWindow = document.getElementById('modal-window')
  const body = document.getElementById('body')
  const closeItem = document.querySelectorAll('.closeWindow')

  function openModelWindow() {
    modelWindow.classList.add('open');
    body.classList.add('stop-scroll')
  }

  function closeModelWindow() {
    modelWindow.classList.remove('open');
    body.classList.remove('stop-scroll')
  }

  for(var i=0; i < itemModelClick.length; i++) {
    itemModelClick[i].addEventListener('click', openModelWindow); 
  };

  closeItem.forEach(item => item.addEventListener('click', closeModelWindow, true))
})();


// ZIRO VALUE
(function() {
  const email = document.getElementById('input-email');
  const name = document.getElementById('input-name');
  const emailZero = document.getElementById('input-email-ziro')
  const nameZero = document.getElementById('input-name-ziro')

  // function for ziro value
  function ziroValue(elem) {
    return () => {
      elem.value = '';
    }
  }
  
  // function for ziro email and name
  const emailWillZero = ziroValue(email);
  const nameWillZero = ziroValue(name);

  emailZero.addEventListener('click', emailWillZero)
  nameZero.addEventListener('click', nameWillZero)
})();