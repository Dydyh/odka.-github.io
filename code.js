function validateTextbox() {
    var name = document.getElementById('name')
    var email = document.getElementById('email')
    var title = document.getElementById('title')
    var message = document.getElementById('message')
    var form = document.getElementById('theForm')
    var errorElement = document.getElementById('error')
    
    form.addEventListener('submit', (e) => {
      let messages = []
      
      if (name.value === '' || name.value == null) {
        messages.push('Name is required')
      }
    
      if (name.value.length <= 6) {
        messages.push('name must be longer than 6 characters')
      }
    
      if (message.value.length < 20) {
        messages.push('Password must not be less than 20 characters')
      }
    
      if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
     
      }
