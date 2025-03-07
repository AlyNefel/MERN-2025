import { Component, OnInit } from '@angular/core';
import {jwtDecode} from 'jwt-decode';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
   imports: [FormsModule,CommonModule],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string | any = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUsername().subscribe(response => {
      console.log("response",response)
      this.username = response.username;
    });
  }

  // getUsernameFromToken(): string | null {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     const decodedToken: any = jwtDecode(token);
  //     return decodedToken.user.username;
  //   }
  //   return null;
  // }
}
