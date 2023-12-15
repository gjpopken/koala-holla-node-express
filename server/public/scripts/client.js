console.log( 'js' );

let hardCodedKoalas = [
  {
    name: 'Kevin',
    age: 7,
    gender: 'male',
    readyToTransfer: false,
    comments: 'is cool'
  },
  {
    name: 'James',
    age: 4,
    gender: 'male',
    readyToTransfer: false,
    comments: 'is dumb'
  },
  {
    name: 'Jane',
    age: 6,
    gender: 'female',
    readyToTransfer: true,
    comments: 'is also cool'
  }
]

function getKoalas(){
  console.log( 'in getKoalas' );
  // axios call to server to get koalas
  const tbody = document.getElementById('viewKoalas')
  tbody.innerHTML = ''
  for (koala of hardCodedKoalas) { // TODO change to the response data
    let newInnerHTML = `
    <tr>
      <td>${koala.name}</td>
      <td>${koala.age}</td>
      <td>${koala.gender}</td>
      <td>${koala.comments}</td>
      <td>${koala.readyToTransfer}</td>
    `
    if (koala.readyToTransfer === false) {
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

    
// ! Comment back in once the servers are up
  // axios({
  //   method: 'GET',
  //   url: '/koalas'
  // }).then((response) => {
  //   let koalas = response.data
  //   const tbody = document.getElementById('viewKoalas')
  //   tbody.innerHTML = ''
  //   for (koala of koalas) {
  //     let newInnerHTML = `
  //     <tr>
  //       <td>${koala.name}</td>
  //       <td>${koala.age}</td>
  //       <td>${koala.gender}</td>
  //       <td>${koala.comments}</td>
  //       <td>${koala.readyToTransfer}</td>
  //     `
  //     if (koala.readyToTransfer === false) {
  //       newInnerHTML += `
  //           <td>
  //             <button>Mark as Ready</button>
  //           </td></tr>
  //           `
  //     } else {
  
  //       newInnerHTML += `
  //         </tr>
  //       `
  //     }
  //     console.log(newInnerHTML);
  //     tbody.innerHTML += newInnerHTML
  //   }
  // }) // end of .then
  
} // end getKoalas

function saveKoala(){
  console.log( 'in saveKoala' );
  // axios call to server to get koalas
  axios({
    method: "POST",
    url: "/koalas",
    data: {
      
    }
  })
  getKoalas()
}

getKoalas()
