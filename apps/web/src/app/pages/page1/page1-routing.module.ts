import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Page1Component } from "./page1.component";

const routes: Routes = [
  {
    path: "",
    component: Page1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [Page1Component],
})
export class Page1RoutingModule {}
