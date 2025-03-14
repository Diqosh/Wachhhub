import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    user: any;

    constructor(private userService: UserServiceService) {}

    ngOnInit(): void {
        this.user = this.userService.getUser();
    }

    navigateToUser() {
        const userJson = localStorage.getItem('user');
        if (userJson) {
            const user = JSON.parse(userJson);
            window.location.href = `/user/${user.id}`;
        }
    }

    logout() {
        localStorage.clear();
        window.location.reload();
    }
}
