import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email :string = '';
  password :string= '';
  errorMessage: any ={}
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log("testtttttttttttttttttttttttttttttttttttttttttttttttttttt",this.email,this.password)
    this.authService.login(this.email, this.password).subscribe( {
      next:res =>{localStorage.setItem('token', res.token) ;this.router.navigate(['/home'])},
      error: err => {this.errorMessage = err;
        console.log(err)
      }
    });
  }
}
