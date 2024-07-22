import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgxPaginationModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export default class HomeComponent implements OnInit {
  p: number = 1;
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
}
