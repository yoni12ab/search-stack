import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { AngularMaterialModule } from "./angular-material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { VirtualScrollerModule } from "ngx-virtual-scroller";

const importExportsModules = [
  AngularMaterialModule,
  FlexLayoutModule,
  VirtualScrollerModule
];
const importExportsComponents = [HeaderComponent];
@NgModule({
  declarations: [...importExportsComponents],
  imports: [CommonModule, ...importExportsModules],
  exports: [...importExportsModules, ...importExportsComponents]
})
export class SharedModule {}
