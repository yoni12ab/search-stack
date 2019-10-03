import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatExpansionModule } from "@angular/material/expansion";

const importsExportsModules = [
  MatInputModule,
  MatListModule,
  MatCardModule,
  MatProgressBarModule,
  MatExpansionModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...importsExportsModules],
  exports: [...importsExportsModules]
})
export class AngularMaterialModule {}
