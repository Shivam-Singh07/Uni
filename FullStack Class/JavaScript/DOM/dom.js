let a = document.querySelector('h1');
a.addEventListener('click', function(){
    a.style.color = 'red';
})

let change = document.querySelector('#change');
let flag = false;
let navbar = document.querySelector('.navbar');
let content = document.querySelector('.content');

    change.addEventListener('click', function(){
        if(flag == false)
        {
            document.body.style.backgroundColor = 'black';
            flag = true;
            a.style.color = 'white';
            change.style.backgroundColor = 'black';
            change.style.color = 'white';
            change.style.borderColor = 'white';
            navbar.style.borderColor = 'white';
            navbar.style.backgroundColor = 'black';
            content.style.color = 'white';
        }
        else
        {
            document.body.style.backgroundColor = 'white';
            flag = false;
            a.style.color = 'black';
            change.style.backgroundColor = 'white';
            change.style.color = 'black';
            change.style.borderColor = 'black';
            navbar.style.borderColor = 'black';
            content.style.color = 'black';
            navbar.style.backgroundColor = 'white';
        }
    },2000)
    


    
