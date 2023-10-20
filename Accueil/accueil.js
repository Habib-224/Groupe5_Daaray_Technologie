
function inscription(){
    validateEmail()
    vider();
  }
  
  function validateEmail() {
        var email = document.getElementById("email").value;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
        if (emailRegex.test(email)) {
            // alert("Email valide !");
            Swal.fire({
            // position: 'center',
            icon: 'success',
            title: 'Success!',
            text: 'Merci pour votre Inscription a la Newsletter',
            showConfirmButton: false,
            timer: 1500,
            
          })
          console.log('email')
          // vider()
        
        } else {
            // alert("Email invalide. Veuillez entrer une adresse email valide.");
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'le mail que vous avez saisi est incorrect',
            footer: '<a href="">Saisir un mail valide</a>'
          })
      
        }
    }
  
    function vider(){
      var mail = document.getElementById('email');
      mail.value = ""
      // console.log(mail)
    }
   
   
   
          