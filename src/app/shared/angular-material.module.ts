import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";

const importsExportsModules = [MatInputModule, MatListModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...importsExportsModules],
  exports: [...importsExportsModules]
})
export class AngularMaterialModule {}
