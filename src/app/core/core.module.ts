import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MediaMatcher } from '@angular/cdk/layout';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [MediaMatcher],
  exports: [],
})
export class CoreModule {}
