import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    userName: string | undefined = "";
    userId: string | undefined = "";
    userCol: string | undefined = "";

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const userdetail = this.userService.getUserDetails()

    this.userName = userdetail?.name
    this.userId = userdetail?.userId
    this.userCol = userdetail?.colour
}

}
