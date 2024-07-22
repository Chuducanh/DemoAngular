import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-compo-d',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './compo-d.component.html',
  styleUrl: './compo-d.component.css'
})
export class CompoDComponent {

}
