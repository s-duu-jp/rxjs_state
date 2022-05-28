import { Component, EventEmitter } from "@angular/core";
import { BehaviorSubject, takeUntil } from "rxjs";

@Component({
  selector: "product-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  onDestroy$ = new EventEmitter();
  state$ = new BehaviorSubject<{ hoge: boolean }>({ hoge: true });

  ngOnInit(): void {
    this.state$.pipe(takeUntil(this.onDestroy$)).subscribe((state) => {
      state.hoge = !state.hoge;
      console.log(`値が変わったよ！：${state.hoge}`);
    });
  }

  setState(): void {
    this.state$.next({ hoge: this.state$.getValue().hoge });
  }

  getState() {
    console.log(this.state$.getValue());
  }

  ngOnDestroy() {
    console.log(`購読やめたよ！`);
    this.onDestroy$.emit();
  }
}
