import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isSignupHide = true;
  conPasswordType = "password";
  eyeIcon = 'uil-eye-slash';
  isPasswordHide = true;
  sigin="sigin-link";
  signup="signup-link"

  constructor() { }

  ngOnInit(): void {
  
  }

  showPassword(isVisible:any){
    if(isVisible){
    this.conPasswordType = 'text';
    this.eyeIcon = 'uil-eye';
    this.isPasswordHide = false;
    } else{
      this.conPasswordType = 'password';
      this.eyeIcon = 'uil-eye-slash';
      this.isPasswordHide = true;
    }
  }

}

   /**  const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields: NodeListOf<HTMLInputElement> = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    pwShowHide.forEach(eyeIcon => {
      eyeIcon.addEventListener("click", () => {


          }        //  code to show/hide password and change icon
        pwFields.forEach(pwField => {
          if (pwField.type == "password") {
            pwField.type = "text";

            pwShowHide.forEach(icon => {
              icon.classList.replace("uil-eye-slash", "uil-eye");
            })
          } else {
            pwField.type = "password";

            pwShowHide.forEach(icon => {
              icon.classList.replace("uil-eye", "uil-eye-slash");
            })
        })
      })
    })
    // js code to check match password and confirm password
    var check = function () {
      const input = document.getElementById("password") as HTMLInputElement;
      const input2 = document.getElementById("confirm_password") as HTMLInputElement;
      if (input?.value == "" && input2?.value == "") {
        document!.getElementById("message")!.style.color = "red";
        document!.getElementById("message")!.innerHTML = "Please Enter password atleast 6 characters";
        const btn = document!.getElementById("submit_button") as HTMLButtonElement;
        btn!.disabled = true;
      } else {
        if (input.value == input2.value) {
          document!.getElementById("message")!.style.color = "green";
          document!.getElementById("message")!.innerHTML = "password matched";
          const btn = document!.getElementById("submit_button") as HTMLButtonElement;

          btn.disabled = false;
        } else {
          document!.getElementById("message")!.style.color = "red";
          document!.getElementById("message")!.innerHTML = "password not matching";
        }
      }
    };

    //login info check
    var check_info = function () {
      const input = document.getElementById("username") as HTMLInputElement;
      const input2 = document.getElementById("userpassword") as HTMLInputElement;
      if (input.value == "" || input2.value == "") {
        var element = document.getElementById("login_msg");

        document!.getElementById("message_container")!.style.display = "block";
        element?.classList.remove("success");
        element?.classList.add("error");
        element!.innerHTML = "Invalide Username and password";

        input.style.marginTop = "10px";
      } else {
        var element = document.getElementById("login_msg");
        document!.getElementById("message_container")!.style.display = "block";
        element?.classList.remove("error");
        element?.classList.add("success");
        element!.innerHTML = "login successfully done";

        input.style.marginTop = "10px";
      }
    };

    // code to appear signup and login form
    signUp?.addEventListener("click", () => {
    container?.classList.add("active");
    });
    login?.addEventListener("click", () => {
      container?.classList.remove("active");
    });

*/





