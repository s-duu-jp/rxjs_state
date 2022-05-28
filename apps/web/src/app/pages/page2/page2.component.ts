import { Component } from "@angular/core";
import {
  StoreService,
  AbstractStoreService,
} from "../../services/store.service";

@Component({
  selector: "product-page2",
  templateUrl: "./page2.component.html",
  styleUrls: ["./page2.component.scss"],
})
export class Page2Component extends AbstractStoreService {
  constructor(storeService: StoreService) {
    super(storeService);
  }
}
