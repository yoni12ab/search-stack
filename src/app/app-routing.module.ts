import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./components/search/search.component";
import { SearchModule } from "./components/search/search.module";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/search",
    pathMatch: "full"
  },
  {
    path: "search",
    loadChildren: () =>
      import("./components/search/search.module").then(m => m.SearchModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
