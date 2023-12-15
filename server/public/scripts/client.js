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
