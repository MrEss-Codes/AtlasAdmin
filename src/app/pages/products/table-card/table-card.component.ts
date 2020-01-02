import { Component, HostBinding, OnInit } from '@angular/core';
import { Product } from '../../../shared/Models/product';
import { ProductService } from '../../../shared/services/product/product.service';
import { Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-table-card',
  styleUrls: ['./table-card.component.scss'],
  templateUrl: './table-card.component.html',
})
export class TableCardComponent implements OnInit {
  @HostBinding('class.projects-table') private readonly projectsTable = true;

  private tableHeader: string[] = [
    'ID',
    'TITLE',
    'DESCRIPTION',
    'BRAND',
    'PRICE',
    'VIEW',
  ];


  constructor(private service: ProductService, private router: Router) { }
  products: Product[];

  //comment
  navigateCreate() {
    this.router.navigateByUrl("/app/productcreate")
  }


  ngOnInit() {
  this.service.getAllProducts().subscribe(o => { this.products = o; });
  }
}
