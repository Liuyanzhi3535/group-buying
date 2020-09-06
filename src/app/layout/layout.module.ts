import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    NavComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [LayoutComponent, HeaderComponent],
})
export class LayoutModule {}
