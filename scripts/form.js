var query = window.location.search

var name = query.split('=')[1]

var butt = document.getElementById('name')

var statusMessage = document.getElementById('statusMessage')

butt.innerText = name

document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault()
  sendFormData()
})


function sendFormData () {
  fetch(`https://quiet-bayou-99554.herokuapp.com/api/v1/contacts`, {
      method: "POST",
      headers: new Headers({
          "content-type": "application/json"
      }),
      body: JSON.stringify(getFormData())
  }).then(response => response.json())
  .catch(console.error)
}

function getFormData(){
    const data = new FormData(document.querySelector("form"));
    statusMessage.innerText = "Message received"
    return {
      data: {
        character: name,
        message: data.get("message")
      }
    };
}
