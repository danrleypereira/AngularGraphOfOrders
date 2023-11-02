import { Component, OnInit } from '@angular/core';
import { BrandsService, ICategory, IBrand, IOrder, IProduct } from '../services/brands.service';

interface ChartDataPoint {
  label: string;
  y: number;
}

interface ChartData {
  type: string;
  dataPoints: ChartDataPoint[];
}

interface ChartOptions {
  title: {
    text: string;
  };
  data: ChartData[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  categories: ICategory[] = [];
  brands: IBrand[] = [];
  products: IProduct[] = [];
  orders: IOrder[] = [];
  selected = {
    category: "",
    product: "",
    brand: "",
  }

  showChart: boolean = false;
  chartOptions: ChartOptions = {
    title: {
      text: "Orders per Month"
    },
    data: [{
      type: "column",
      dataPoints: []
    }]
  };

  constructor(private brandsService: BrandsService) { }

  ngOnInit(): void {
    this.brandsService.getCategories().subscribe(
      data => this.categories = data,
      error => console.error(error)
    );
  }

  selectedCategory: any = null;
  selectedProduct: any = null;
  categorySelected(categoryId: number): void {
    this.selectedCategory = categoryId;
    this.brandsService.getProductsByCategoryId(categoryId).subscribe(
      data => {
        this.selected.category = this.categories.find(c => c.categoryId === categoryId)?.categoryName || '';
        this.products = data;
      },
      error => console.error(error)
    );
  }

  productSelected(productId: number): void {
    this.selectedProduct = productId;
    this.brandsService.getBrandsByProductId(productId).subscribe(
      data => {
        this.selected.product = this.products.find(p => p.productId === productId)?.productName || '';
        this.brands = data;
      },
      error => console.error(error)
    );
  }

  brandSelected(brandId: number): void {
    this.brandsService.getOrdersByBrandId(brandId).subscribe(
      data => {
        this.selected.brand = this.brands.find(b => b.brandId === brandId)?.brandName || '';
        this.orders = data;
        this.updateChartOptions(); // Call this method to update chartOptions
      },
      error => console.error(error)
    );
  }

  hasOrders(): boolean {
    return this.orders && this.orders.length > 0;
  }

  getSelected(): string {
    return `Sales by month for: ${this.selected.category} ${this.selected.product} ${this.selected.brand}`;
  }

  private updateChartOptions(): void {
    const ordersPerMonth = this.getOrdersPerMonth();
    this.chartOptions.data[0].dataPoints = ordersPerMonth;
    this.reloadChart(); // Call this method to reload the chart
  }

  reloadChart(): void {
    this.showChart = false; // First, set showChart to false to remove the chart from the DOM
    setTimeout(() => {
      this.showChart = true; // Then, set it back to true to re-add the chart to the DOM
    }, 0); // Using setTimeout with a delay of 0 to allow the DOM to update between removing and re-adding the chart
  }

  private getOrdersPerMonth(): { label: string, y: number }[] {
    // Assuming orders have a property 'orderDate' in 'YYYY-MM-DD' format
    const ordersPerMonth: { [key: string]: number } = {};
    this.orders.forEach(order => {
      const month = order.orderDate.split('-')[1]; // Extracting month from orderDate
      ordersPerMonth[month] = (ordersPerMonth[month] || 0) + 1;
    });
    return Object.entries(ordersPerMonth)
      .sort(([monthA], [monthB]) => parseInt(monthA) - parseInt(monthB)) // Sorting entries by month number
      .filter(([month]) => parseInt(month) >= 1 && parseInt(month) <= 4) // Filtering entries to include only January to April
      .map(([month, count]) => ({
        label: this.getMonthName(month),
        y: count
      }));
  }

  private getMonthName(month: string): string {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames[parseInt(month) - 1];
  }
}
