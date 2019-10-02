import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
const importsExportsModules = [MatInputModule, MatListModule, MatCardModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...importsExportsModules],
  exports: [...importsExportsModules]
})
export class AngularMaterialModule {}
