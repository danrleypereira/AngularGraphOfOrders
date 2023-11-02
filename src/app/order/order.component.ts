import { Component, OnInit } from '@angular/core';
import { BrandsService, IOrder } from "../services/brand/brands.service";
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css'],
    providers: [DatePipe] // add DatePipe to providers
})
export class OrderComponent implements OnInit {

    orders!: IOrder[];

    constructor(private brandsService: BrandsService, private route: ActivatedRoute, private datePipe: DatePipe) { }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            const brandId = +params['brandId']; // '+' converts string to number
            if (brandId) {
                this.getOrders(brandId);
            }
        });
    }

    getOrders(brandId: number) {
        this.brandsService.getOrdersByBrandId(brandId).subscribe((data: IOrder[]) => {
          this.orders = data.map(order => {
            order.orderDate = this.datePipe.transform(order.orderDate, 'fullDate') || 'N/A'; // format date
            return order;
          });
        });
      }
}
