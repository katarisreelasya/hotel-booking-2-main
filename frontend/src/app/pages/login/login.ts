 
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule ,NgForm} from '@angular/forms';
import { UserService } from '../../feature/services/user.service';
 
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = 'sreelasya2503@gmail.com';
  password = 'Lasya@25';
 
  constructor(
    private userService: UserService,
    private router: Router
  ) {}
onLogin() {
  const credentials = { email: this.email, password: this.password };
 
  this.userService.login(credentials).subscribe({
    next: (res) => {
      if (res.success && res.data) {
        const foundUser = res.data;
 
        // If not active, show alert 
        if (foundUser.isActive === false) {
          alert('Your account is pending Admin approval. Please contact support.');
          return; 
        }
 
        // Only active users reach this point
        const userId = foundUser._id || foundUser.id;
        this.userService.setLoggedUser(userId);
       
        switch (foundUser.role) {
          case 'user':
            this.router.navigate(['/user-dashboard']);
            break;
          case 'admin':
            this.router.navigate(['/admin-dashboard', userId]);
            break;
          case 'hotel manager':
            this.router.navigate(['/manager-dashboard']);
            break;
        }
      }
    },
    error: (err) => {
      alert(err.error?.message || 'Invalid credentials.');
    }
  });
}
}
 