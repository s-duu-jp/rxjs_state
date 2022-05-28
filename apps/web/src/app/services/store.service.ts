import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface State {
  message: string;
}
@Injectable({
  providedIn: "root",
})
export class StoreService {
  state$ = new BehaviorSubject<State>({ message: "初期値" });

  next(data: State): void {
    this.state$.next(data);
  }
}
