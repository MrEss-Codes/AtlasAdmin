import { Component, HostBinding, OnInit} from '@angular/core';
import { ProductStatus } from '../../../shared/Models/productStatus';
@Component({
  selector: 'app-table-card',
  styleUrls: ['./table-card.component.scss'],
  templateUrl: './table-card.component.html',
})
export class TableCardComponent {
  @HostBinding('class.projects-table') private readonly projectsTable = true;

  private tableHeader: string[] = [
    'Order ID',
    'User ID',
    'Product',
    'Status',
    'Purchase Date',
  ];
  private data: ProductStatus[]

  ngOnInit() {

}
}
