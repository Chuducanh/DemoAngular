import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-compo-c',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './compo-c.component.html',
  styleUrl: './compo-c.component.css'
})
export class CompoCComponent {

}
