import { Component, OnInit } from '@angular/core';
import { BrandsService, IBrand } from '../services/brand/brands.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands!: IBrand[];

  constructor(private brandsService: BrandsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
        const productId = +params['productId'];
        if(productId)
            this.getBrands(productId);
    });
  }

  getBrands(productId: number) {
    this.brandsService.getBrandsByProductId(productId)
      .subscribe((data: IBrand[]) => {
        this.brands = data;
      });
  }
}
