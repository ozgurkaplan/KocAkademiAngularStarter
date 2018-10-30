import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  currentPage:string;
  userSummary:string;
  menuList = [
    { routerLink: '/question/list', label: 'Home' },
    { routerLink: '/question/ask', label: 'Ask Question' },
    { routerLink: '/user/profile', label: 'User Profile' }
  ];
  constructor(private router: Router,private userService:UserService) { 
    this.currentPage = router.url;
    
  }

  ngOnInit() {
    let currentUserId = this.userService.getCurrentUserId();
    this.userService.getUser(currentUserId).subscribe(u=>{
      this.userSummary = `${u.name} (${u.reputation})`;
    })
  }

  logout() {
    localStorage.removeItem("userId");
    this.router.navigate(['login']);
  }

}
