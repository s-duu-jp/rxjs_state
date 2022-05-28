import { Component } from "@angular/core";
import {
  StoreService,
  AbstractStoreService,
} from "../../services/store.service";

@Component({
  selector: "product-page1",
  templateUrl: "./page1.component.html",
  styleUrls: ["./page1.component.scss"],
})
export class Page1Component extends AbstractStoreService {
  constructor(storeService: StoreService) {
    super(storeService);
  }
}
