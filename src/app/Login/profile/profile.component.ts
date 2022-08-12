import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { UserService } from '../_services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  users : User[] = [];

  constructor(private storageService: StorageService, private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();

    this.currentUser = this.storageService.getUser();
  }

  private getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(data)
    })
  }
}
