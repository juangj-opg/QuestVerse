import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent implements OnInit {
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private spinnerService: LoaderService) {}
  ngOnInit(): void {
    this.isLoading = this.spinnerService.isLoading;
  }
}
