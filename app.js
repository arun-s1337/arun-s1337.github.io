
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}


// Text typing effect
const content = ["First website", "Information Technology Student", "Just visit",];
let part = 0, index = 0, interval;

const element = document.querySelector("#text");
const cursor = document.querySelector("#cursor");

const type = () => {
  const text = content[part].slice(0, ++index);
  element.textContent = text;

  if (text === content[part]) {
    cursor.style.display = "none";
    clearInterval(interval);
    setTimeout(() => (interval = setInterval(erase, 50)), 2000);
  }
};

const erase = () => {
  const text = content[part].slice(0, --index);
  element.textContent = text;

  if (text === "") {
    clearInterval(interval);
    part = (part + 1) % content.length;
    index = 0;

    setTimeout(() => {
      cursor.style.display = "inline-block";
      interval = setInterval(type, 100);
    }, 2000);
  }
};

interval = setInterval(type, 100);
// end