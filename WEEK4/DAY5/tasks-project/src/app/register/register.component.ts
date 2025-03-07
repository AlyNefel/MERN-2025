import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
username='';
email='';
password='';
constructor(private authService:AuthService,private router:Router){}
onSubmit(){
  this.authService.register(this.username,this.email,this.password).subscribe(res=>{
    localStorage.setItem('token',res.token)
    this.router.navigate(['/home'])
  })
}

}
