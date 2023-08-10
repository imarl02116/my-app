import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    // products: Product[] = this.productService.getProducts();

    const productObservable = this.productService.getProducts();
    productObservable.subscribe({
      next: (data) => {
        this.products = data
      },
      error: (err) => { console.error('Output error' + err) },
    })
  }
}
