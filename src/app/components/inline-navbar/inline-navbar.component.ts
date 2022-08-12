import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Login/_services/auth.service';
import { StorageService } from 'src/app/Login/_services/storage.service';

@Component({
  selector: 'app-inline-navbar',
  templateUrl: './inline-navbar.component.html',
  styleUrls: ['./inline-navbar.component.scss'],
})
export class InlineNavbarComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = true;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(
    private storageService: StorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }
  logout(): void {
    this.authService.logout().subscribe({
      next: (res) => {
        console.log(res);
        this.storageService.clean();
      },
      error: (err) => {
        console.log(err);
      },
    });

    window.location.reload();
  }
}
