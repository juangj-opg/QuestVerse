import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './custom-material.module';
import { SpinnerComponent } from '../core/interceptors/spinner/spinner.component';

@NgModule({
  imports: [
    RouterModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [LayoutComponent, FooterComponent, SpinnerComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    SpinnerComponent,
  ],
})
export class SharedModule {}
