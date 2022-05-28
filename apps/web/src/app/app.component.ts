import { Component } from "@angular/core";

@Component({
  selector: "product-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  message = String(new Date());

  updateMessage() {
    this.message = String(new Date());
  }
}
