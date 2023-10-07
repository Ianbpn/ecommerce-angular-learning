import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/Types/Auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:LoginForm={
    email:'',
    password: '',
  };

  isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    if (this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in 
        alert('Logged in');
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Credentials does not match our records')
      })
      .finally(()=> (this.isLoading = false));
  }
}
