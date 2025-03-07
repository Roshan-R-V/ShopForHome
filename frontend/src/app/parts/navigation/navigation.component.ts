// import {Component, OnDestroy, OnInit} from '@angular/core';
// import {UserService} from '../../services/user.service';
// import {Subscription} from 'rxjs';
// import {JwtResponse} from '../../response/JwtResponse';
// import {Router} from '@angular/router';
// import {Role} from '../../enum/Role';
// import { User } from 'src/app/models/User';
//
// @Component({
//     selector: 'app-navigation',
//     templateUrl: './navigation.component.html',
//     styleUrls: ['./navigation.component.css']
// })
// export class NavigationComponent implements OnInit, OnDestroy {
//
//
//     currentUserSubscription: Subscription;
//     name$;
//     name: string;
//     currentUser: JwtResponse;
//     root = '/';
//     Role = Role;
//     userList: User[];
//
//     constructor(private userService: UserService,
//                 private router: Router,
//
//     ) {
//
//     }
//
//
//     ngOnInit() {
//         this.name$ = this.userService.name$.subscribe(aName => this.name = aName);
//         this.currentUserSubscription = this.userService.currentUser.subscribe(user => {
//             this.currentUser = user;
//           // tslint:disable-next-line:triple-equals
//             if (!user || user.role == Role.Customer) {
//                 this.root = '/';
//             } else {
//                 this.root = '/seller';
//             }
//         });
//     }
//
//     ngOnDestroy(): void {
//         this.currentUserSubscription.unsubscribe();
//         // this.name$.unsubscribe();
//     }
//
//     logout() {
//         this.userService.logout();
//         // this.router.navigate(['/login'], {queryParams: {logout: 'true'}} );
//     }
//
//
//     getUsers() {
//         this.userService.getUsers().subscribe(response => this.userList = response);
//       }
//
//
// }


import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { JwtResponse } from '../../response/JwtResponse';
import { Router } from '@angular/router';
import { Role } from '../../enum/Role';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {

  currentUserSubscription: Subscription;
  nameSubscription: Subscription;
  name = '';
  currentUser: JwtResponse | null = null;
  root = '/';
  Role = Role;
  userList: User[] = [];
  searchText = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Subscribe to name observable
    this.nameSubscription = this.userService.name$.subscribe(name => {
      this.name = name;
    });

    // Subscribe to current user observable
    this.currentUserSubscription = this.userService.currentUser.subscribe(user => {
      this.currentUser = user;
      this.root = (user && user.role === Role.Manager) ? '/seller' : '/';
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    if (this.currentUserSubscription) {
      this.currentUserSubscription.unsubscribe();
    }
    if (this.nameSubscription) {
      this.nameSubscription.unsubscribe();
    }
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login'], { queryParams: { logout: 'true' } });
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(response => {
      this.userList = response;
    });
  }
}
