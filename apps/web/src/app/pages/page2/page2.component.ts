import { Component, EventEmitter, OnDestroy, OnInit } from "@angular/core";
import { takeUntil } from "rxjs";
import { StoreService } from "../../services/store.service";

@Component({
  selector: "product-page2",
  templateUrl: "./page2.component.html",
  styleUrls: ["./page2.component.scss"],
})
export class Page2Component implements OnInit, OnDestroy {
  message = "";

  constructor(public storeService: StoreService) {}

  onDestroy$ = new EventEmitter();

  ngOnInit(): void {
    console.log(`購読はじめたよ！`);
    this.storeService.state$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((state) => {
        console.log(`値が変わったよ！：${state.message}`);
      });
  }

  setState(): void {
    this.storeService.next({
      message: this.message,
    });
  }

  getState(): void {
    console.log({ hoge: this.storeService.state$.getValue().message });
  }

  ngOnDestroy(): void {
    this.onDestroy$.emit();
  }
}
