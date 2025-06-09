// console.log("haahaha");
// console.log("hehehehhehe");
// console.log("kese hooo");
// setTimeout(() =>{
//     console.log("me tho late hu");
    
// },2500);

// function task(message)
// {
//     let n = 10;
//     while(n > 0)
//     {
//         console.log(n);
        
//         n--;
//     }
//     console.log(message);
    
// }

// console.log("Start script:");

// setTimeout(() =>{
//     task("Download a file");
    
// },2000);

// console.log("Done!");


//*************************************************************************************** Promise **********************************************/


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         console.log("promise 1");
//         let error = true;
//         if(!error)
//         {
//             resolve({
//                 username: "shivamsingh",
//                 email: "habc@gmail.com"
//             })
//         }
//         else
//         {
//             reject("could't fetch user details")
//         }
//     }, 1000)
// })
// consuming a promise


//then() chaining
// promise.then((data) =>{
//    console.log(data);
//     return data.username;
    
// }).then((data) => {
//     console.log(data.username);
    
// }).catch((err) => {
//     console.log(err);
    
// })



//Making api



// fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
//     return response.json();

// }).then((data) => {
//     //console.log(data);
    
// })


//Async wait


const fetchUsers = async() => {
    try
    {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();
        console.log(data);
    }
    catch(err)
    {
        console.log(err);
            
    }
    
}

fetchUsers();