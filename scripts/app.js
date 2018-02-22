var ul = document.getElementById("characters")

fetch('https://quiet-bayou-99554.herokuapp.com/api/v1/contacts')
  .then(function(status) {
    return status.json()
  })
  .then(function(data) {
    data.data.forEach(function(currentData) {
      var li = document.createElement('li')
      var img = document.createElement('img')
      var span = document.createElement('span')
      var p = document.createElement('p')
      var a = document.createElement('a')
      img.src = currentData.imageURL
      span.innerText = 'Name: ' + currentData.name  + ', Phone: ' + currentData.phone
      p.innerText = 'Message: ' + currentData.message
      a.innerText = 'Leave ' + currentData.name + ' a message.'
      a.href = 'contact.html?character='+ currentData.name
      ul.appendChild(li)
      li.appendChild(img)
      li.appendChild(span)
      li.appendChild(p)
      li.appendChild(a)
    })
  })
