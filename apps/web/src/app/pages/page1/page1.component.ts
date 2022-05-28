import { Component, OnInit } from "@angular/core";

@Component({
  selector: "product-page1",
  templateUrl: "./page1.component.html",
  styleUrls: ["./page1.component.scss"],
})
export class Page1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // onDestroy$ = new EventEmitter();
  // state$ = new BehaviorSubject<{ hoge: boolean }>({ hoge: true });

  // ngOnInit(): void {
  //   this.state$.pipe(takeUntil(this.onDestroy$)).subscribe((state) => {
  //     state.hoge = !state.hoge;
  //     console.log(`値が変わったよ！：${state.hoge}`);
  //   });
  // }

  // setState(): void {
  //   this.state$.next({ hoge: this.state$.getValue().hoge });
  // }

  // getState() {
  //   console.log(this.state$.getValue());
  // }

  // ngOnDestroy() {
  //   console.log(`購読やめたよ！`);
  //   this.onDestroy$.emit();
  // }
}
