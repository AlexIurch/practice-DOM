// Lager variabler som vi skal jobbe med
const out=document.getElementById('container');
const nav = document.getElementById('navbar');
const button = document.getElementById('but1');

nav.style.backgroundColor = 'blue';

// Lager en funksjon som startes med "button" knappen
function f1(){
    button.textContent= ":-)"
    button.classList.add('button1');
    nav.style.width ='100%';
    out.style.width ='100%';
    nav.style.backgroundColor = 'rgb(116, 109, 240)';

// Lager to nye knapper
    let but2 =document.createElement('button');
    but2.classList.add('button1');
    but2.textContent= "Change color"

    let but3 =document.createElement('button');
    but3.classList.add('button1');
    but3.textContent= "Make div"

    nav.append(but2, but3)

//Gjør to funksjoner inne i hovedfunksjonen til disse knaper 
    but2.onclick= ()=>{
        out.style.backgroundColor= "#" + Math.floor(Math.random()*16777215).toString(16);

        nav.style.backgroundColor= "#" + Math.floor(Math.random()*16777215).toString(16);

        console.log('ok')
    }

    but3.onclick= ()=>{

        while(out.firstChild){
            out.removeChild(out.firstChild)
        }

        nav.style.backgroundColor= 'red';
        let div = document.createElement('div');
        div.innerHTML= 'This is a div what we create!!!'
        div.classList.add('typing');
        out.append(div)
    }
}


// Kjøre funksjonen en gang - {once:true}
button.addEventListener('click', f1, {once:true} )
