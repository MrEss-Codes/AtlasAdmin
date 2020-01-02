import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme';

import { CotoneasterCardComponent } from './cotoneaster-card';
import { DashboardComponent } from './dashboard.component';
import { LineChartComponent } from './line-chart';
import { MostsoldComponent } from './mostsold';
import { PieChartComponent } from './pie-chart';
import { TableCardComponent } from './table-card';
import { TrendingComponent } from './trending';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
  ],
  declarations: [
    DashboardComponent,
    LineChartComponent,
    PieChartComponent,
    CotoneasterCardComponent,
    TableCardComponent,
    TrendingComponent,
    MostsoldComponent,
  ],
  exports: [
    TrendingComponent,
  ],
})
export class DashboardModule { }
