const url = 'http://localhost:3000'

      function signIn() {
        const email = $('#email').val()
        const password = $('#password').val()

        if (email.length == 0) {
          alert('enter email')
        } else if (password.length == 0) {
          alert('enter password')
        } else {
          // make signup API call
          $.ajax({
            url: url + '/user/signin',
            method: 'POST',
            data: {
              email: email,
              password: password,
            },
            success: (response) => {
              console.log(response)
              if (response['status'] == 'success') {
                alert('welcome to my ecommerce application')
              } else {
                alert(response['error'])
              }
            },
            error: (response) => {
              console.log(response)
            },
          })
        }
      }