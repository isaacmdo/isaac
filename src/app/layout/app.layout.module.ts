import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { AppLayoutComponent } from './app.layout.component';
import { AppFooterComponent } from './app.footer.component';
import { AppTopBarComponent } from './app.topbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppLayoutComponent,
    AppTopBarComponent,
    AppFooterComponent
  ],
  imports: [CommonModule, RouterModule],
})
export class AppLayoutModule {}
