console.log( 'js' );



function getKoalas(){
  console.log( 'in getKoalas' );
    
// ! Comment back in once the servers are up
  axios({
    method: 'GET',
    url: '/koalas'
  }).then((response) => {
    let koalas = response.data
    //console.log('response data:', response.data);
    const tbody = document.getElementById('viewKoalas')
    tbody.innerHTML = ''
    for (let koala of koalas) {
      console.log(koala);
      let newInnerHTML = `
      <tr>
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.gender}</td>
        <td>${koala.comments}</td>
        <td>${koala.ready_to_transfer}</td>
      `
      if (koala.ready_to_transfer === false) {
        newInnerHTML += `
            <td>
              <button>Mark as Ready</button>
            </td></tr>
            `
      } else {
  
        newInnerHTML += `
          </tr>
        `
      }
      //console.log(newInnerHTML);
      tbody.innerHTML += newInnerHTML
    }
  }) // end of .then
  .catch((error) => {
    console.log(error);
  })
  
} // end getKoalas

function saveKoala(){
  console.log( 'in saveKoala' );
  // axios call to server to get koalas
  // ! Getting the values of the inputs from the DOM and storing as variables to use in the data we send to the server
  let nameInput = document.getElementById('nameIn').value
  let ageInput = document.getElementById('ageIn').value
  let genderInput = document.getElementById('genderIn').value
  let commentsInput = document.getElementById('notesIn').value
  let ready_to_transfer_Input = document.getElementById('addButton').value

  axios({
    method: "POST",
    url: "/koalas",
    data: {
      name: nameInput,
      age: ageInput,
      gender: genderInput,
      ready_to_transfer: Boolean(ready_to_transfer_Input),
      comments: commentsInput
    }
  }).then((response)=>{
    console.log('successfully posted to the server');
    getKoalas()
  }).catch((error)=>{
    console.log(error);
  })
 
}

getKoalas()
