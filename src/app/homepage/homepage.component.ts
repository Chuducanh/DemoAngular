import { Component } from '@angular/core';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export default class HomePageComponent {

}
