import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgClass, NgFor, NgIf, SlicePipe } from '@angular/common';
import { TooltipComponent } from '../tooltip/tooltip.component';

@Component({
  selector: 'app-gridview',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, NgxPaginationModule, SlicePipe, TooltipComponent],
  templateUrl: './gridview.component.html',
  styleUrl: './gridview.component.css'
})
export default class GridviewComponent {
  isGridView: boolean = true;
  p: number = 1;
  showsTooltip = false;
  tooltipText = 'This is default parent component text';
  topPosition: any;
  leftPosition: any;

  constructor(private _http: HttpClient) { }

  products: IProduct[] = []

  api_get_data = 'https://6698bff72069c438cd6fccc2.mockapi.io/api/v1/products/products';

  ngOnInit(): void {
    this._http.get<IProduct[]>(this.api_get_data).subscribe({
      next: value => {
        this.products = value
      },
      error: err => console.error(err),
    })
  }

  switchView() {
    this.isGridView = !this.isGridView
  }

  onHover(tooltipText: string, e: MouseEvent) {
    this.showsTooltip = true;
    this.tooltipText = tooltipText;
    this.topPosition = e.clientY;
    this.leftPosition = e.clientX;
  }
  onMouseout() {
    this.showsTooltip = false;
    this.tooltipText = '';
    this.topPosition = null;
    this.leftPosition = null;
  }
}
