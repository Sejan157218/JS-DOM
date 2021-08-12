// let friendLi = document.getElementsByTagName('li');
// for(let li of friendLi){
//     li.style.border = '2px solid green';
//     li.style.borderRadius = '5px';
//     li.style.margin = '5px';
//     li.style.padding = '2px';
//     };

let best = document.getElementById('best');
console.log(best.innerText)
best.innerText = 'best friend';
let ul = document.getElementById('ul');
console.log(ul);
let index4 =ul.children[4];
ul.childNodes.childNodes;
ul.removeChild(index4);

let addfriend = document.createElement('li');
let addfriend = document.createElementBy
addfriend.innerHTML = `
<h3>friends-10</h3>
<p>Ab iure cupiditate dolorem, explicabo aperiam quo, maiores deserunt soluta laborum quae</p>
`
ul.appendChild(addfriend);
let friendLi = document.getElementsByTagName('li');
for(let li of friendLi){
    li.style.border = '2px solid green';
    li.style.borderRadius = '5px';
    li.style.margin = '5px';
    li.style.padding = '2px';
    };