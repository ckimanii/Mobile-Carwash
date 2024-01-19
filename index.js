fetch("product.json")
.then(response => response.json())
.then(data => {
  // use the fetched data here
  console.log(data);
})
.catch(error => {
  // handle any errors here
  console.error(error);
});



// post data

// let form = document.querySelector('form');
// form.addEventListener('submit', handleSubmit);


// function handleSubmit(event){
//     event.preventDefault();
//     let formData = new formData(form);
//     let data = object.formEntries(formData);
//     let jsonData = JSON.stringify(data);

//     fetch("user.json",{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json'

//         },
//         body:jsonData
//     }) .then(res => res.json())
//     .then(result => console.log(result))
//     .catch(err=>console.log(err));

// }