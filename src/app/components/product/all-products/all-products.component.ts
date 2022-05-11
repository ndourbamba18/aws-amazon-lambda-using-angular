import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/_service/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  public products: Product[] = [];
  public product: Product = null;
  public keyword: any;
  id: number;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    /*this.id = this.activatedRoute.snapshot.params.id;
    this.productService.getProductById(this.id).subscribe(
      (data) => {
        this.product = data;
      },
      err => {
        alert(err.error.message);
      }
    );*/

    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAllProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
        console.table(this.products);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error.message);
      }
    );
  }

   /* Search Form */

   searchEmployees(): void {
    this.productService.findByProducts(this.keyword).subscribe(
      data => {
        this.products = data;
        console.log(data);
      },
      err => {
        console.log(err.error.message);
      }
    );
  }

  /* End Search Form */

}
