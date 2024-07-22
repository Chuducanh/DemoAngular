import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})


export class SidebarComponent implements OnInit{
  path: string = "";

  constructor(private router: Router) {
    
  }

  ngOnInit() {
    this.path = this.router.url;
  }
}
