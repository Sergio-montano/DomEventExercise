// 1a
const button1 = document.getElementById('one');


// 1b
button1.onclick = () => alert('You Clicked Button One');

// 2a
const button2 = document.getElementById('two');

// 2b
button2.addEventListener('dblclick', () => {
  alert('You DOUBLE Clicked The Second Button!!!')
});

// 3a
const form = document.querySelector('form');

form.addEventListener('submit', () => {
    const username = form.elements.username.value;
    alert(username);
    // Or
    // alert(form.elements.username.value);
  });
//4a
  const darkMode = document.getElementById('dm');

  //4b
  const allElements = document.querySelectorAll('*');
  console.log(allElements);
  darkMode.addEventListener('click', () => {
    for (element of allElements){
      element.classList.toggle('dark-mode');
    }
  });
  