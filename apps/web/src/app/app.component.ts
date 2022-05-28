import { Component } from "@angular/core";
import { StoreService } from "./services/store.service";

@Component({
  selector: "product-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(public storeService: StoreService) {}
}
