import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/_service/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  public product: Product;
  public deleteProduct: Product;
  id: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.productService.getProductById(this.id).subscribe(
      data => {
        this.product = data;
      },
      err => {
       console.log(err.error.message);
      }
    );

  }

  onBackToHome(){
    this.router.navigate(["/"]);
  }

  onUpdateProduct(editProduct: Product) {
    this.id = this.activatedRoute.snapshot.params.id;
    this.productService.editProductById(this.id, editProduct).subscribe(
      (data) => {
        this.ngOnInit();
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        alert(err.error.message);
      }
    );
  }

  onDeleteProduct(id) {
    //alert(id);
    this.productService.deleteProductById(id).subscribe(() => {
      window.location.replace(`/all-products`);
    });
  }

}
