import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "child-2",
  template: `
    <div>Child 2</div>
    <div>
      <button (click)="addQueryParams()">Add Query Params</button>
    </div>
  `,
})
export class Child2Component {
  constructor(private router: Router) {}

  addQueryParams(): void {
    this.router.navigate([], {
      queryParams: {
        param1: "alice",
        param2: "bob",
      },
      queryParamsHandling: "merge",
    });
  }
}
