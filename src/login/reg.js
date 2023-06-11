const url = 'http://localhost:3000'

      function signUp() {
        const firstName = $('#first-name').val()
        const lastName = $('#last-name').val()
        const email = $('#email').val()
        const password = $('#password').val()
        const confirmPassword = $('#confirm-password').val()

        if (firstName.length == 0) {
          alert('enter first name')
        } else if (lastName.length == 0) {
          alert('enter last name')
        } else if (email.length == 0) {
          alert('enter email')
        } else if (password.length == 0) {
          alert('enter password')
        } else if (confirmPassword.length == 0) {
          alert('enter confirm password')
        } else if (password != confirmPassword) {
          alert('password does not match')
        } else {
          // make signup API call
          $.ajax({
            url: url + '/user/signup',
            method: 'POST',
            data: {
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: password,
            },
            success: (response) => {
              console.log(response)
            },
            error: (response) => {
              console.log(response)
            },
          })
        }
      }