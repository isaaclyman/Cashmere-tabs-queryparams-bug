import { Component, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router, Params } from "@angular/router";
import { TabChangeEvent, TabSetComponent } from "@healthcatalyst/cashmere";

/**
 * @title Horizontal Tabs with Event Handling
 */
@Component({
  selector: "hc-tabs-horizontal-example",
  templateUrl: "tabs-horizontal-example.component.html",
  styleUrls: ["tabs-horizontal-example.component.scss"],
})
export class TabsHorizontalExampleComponent {
  constructor(private router: Router) {}

  getCurrentQueryParams(): Params {
    const urlTree = this.router.parseUrl(this.router.url);
    return urlTree.queryParams;
  }
}
