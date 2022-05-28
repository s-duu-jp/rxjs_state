import { Component, OnDestroy, OnInit } from "@angular/core";
import { AbstractStoreService, StoreService } from "./services/store.service";

@Component({
  selector: "product-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent
  extends AbstractStoreService
  implements OnInit, OnDestroy
{
  constructor(storeService: StoreService) {
    super(storeService);
  }

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy() {
    this.destroy();
  }
}
