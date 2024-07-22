import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-compo-b',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './compo-b.component.html',
  styleUrl: './compo-b.component.css'
})
export class CompoBComponent {

}
