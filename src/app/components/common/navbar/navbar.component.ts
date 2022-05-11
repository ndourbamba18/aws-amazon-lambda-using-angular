import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/_service/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
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

  public onAddProduct(addForm: NgForm): void {
    this.productService.addProduct(addForm.value).subscribe(
      (response: Product) => {
        console.log(response);
        this.ngOnInit();
        addForm.reset();
      },
      (err: HttpErrorResponse) => {
        console.log(err.error.message);
      }
    );
  }
}
