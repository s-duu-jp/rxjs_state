import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject, takeUntil } from "rxjs";

interface State {
  message: string;
}

@Injectable({
  providedIn: "root",
})
export class StoreService {
  state$ = new BehaviorSubject<State>({ message: "初期値" });

  /** storeへobserverを流す() */
  next(data: State): void {
    this.state$.next(data);
  }
}

export abstract class AbstractStoreService {
  onDestroy$ = new EventEmitter();

  /** メッセージ */
  message = "";

  constructor(public storeService: StoreService) {}

  /** 購読(subscribe) */
  init(): void {
    this.storeService.state$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((state) => {
        console.log(`値が変わったことを購読で検知したよ！：${state.message}`);
      });
  }

  /** 購読の破棄(unsubscribe) */
  destroy() {
    console.log(`購読やめたよ！`);
    this.onDestroy$.emit();
  }

  /** store更新 */
  setState(): void {
    this.storeService.next({
      message: this.message,
    });
  }

  /** store取得 */
  getState(): void {
    console.log(this.storeService.state$.getValue());
  }
}
