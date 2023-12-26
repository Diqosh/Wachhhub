import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: any;
  suffixTemplateInfo: string | TemplateRef<void> | undefined;
  prefixTemplateUser: string | TemplateRef<void> | undefined;
  userName: any;

  constructor(
    private userService: UserServiceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.userName = this.user.name;
  }

  updateUsername(): void {
    const updatedUserData = { name: this.userName };
    const userID = this.user.id;
    const apiUrl = `https://json-api-diqosh-cf992770784d.herokuapp.com/users/${userID}`;

    this.http.patch(apiUrl, updatedUserData).subscribe(
      (response) => {
        console.log('Username updated successfully:', response);

        // Update user data in localStorage
        const updatedUser = { ...this.user, name: this.userName };
        localStorage.setItem('user', JSON.stringify(updatedUser));

        // Optionally, you can update the user property in your component
        this.user = updatedUser;
      },
      (error) => {
        console.error('Error updating username:', error);
      }
    );
  }
}
