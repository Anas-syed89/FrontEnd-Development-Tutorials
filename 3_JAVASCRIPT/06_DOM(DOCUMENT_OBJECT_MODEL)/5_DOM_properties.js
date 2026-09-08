// DOM PROPERTIES

let para = document.querySelector(".msg");

    console.log( para.innerHTML );   // Sirf p tag ke andar ka HTML
    console.log( para.outerHTML );   // Pura p tag + andar ka HTML
    console.log( para.textContent ); // Sirf text, tags ke baghair
    console.log( para.tagName );     // P
    console.log( para.nodeName );    // P