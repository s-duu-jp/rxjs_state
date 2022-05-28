import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: "", redirectTo: "/page1", pathMatch: "full" },
  {
    path: "page1",
    loadChildren: () =>
      import("./pages/page1/page1-routing.module").then(
        (m) => m.Page1RoutingModule
      ),
  },
  {
    path: "page2",
    loadChildren: () =>
      import("./pages/page2/page2-routing.module").then(
        (m) => m.Page2RoutingModule
      ),
  },
  { path: "**", redirectTo: "/page1", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
