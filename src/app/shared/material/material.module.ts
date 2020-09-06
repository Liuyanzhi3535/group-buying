import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatIconModule, MatSidenavModule, MatListModule],
  exports: [MatButtonModule, MatIconModule, MatSidenavModule, MatListModule],
})
export class MaterialModule {}
