import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'child-1',
  template: `
    <div>Child 1</div>
    <div>
      <button (click)="addQueryParams()">Add Query Params</button>
    </div>
  `,
})
export class Child1Component {
  constructor(private router: Router) {}

  addQueryParams(): void {
    this.router.navigate([], {
      queryParams: {
        param1: 'hello',
        param2: 'world',
      },
      queryParamsHandling: 'merge',
    });
  }
}
