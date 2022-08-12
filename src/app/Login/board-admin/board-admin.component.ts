import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../_services/user.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;

  users : User[] = [];
  currentUser: any;


  constructor(private userService: UserService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.getUsers();
    this.currentUser = this.storageService.getUser();
    this.userService.getAdminBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      }
    });
  }

  private getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(data)
    })


  }

  
}
