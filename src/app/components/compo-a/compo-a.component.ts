import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-compo-a',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './compo-a.component.html',
  styleUrl: './compo-a.component.css'
})
export class CompoAComponent {

}
