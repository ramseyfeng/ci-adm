import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatIconRegistry,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule, MatFormFieldModule, MatGridListModule, MatSelectModule, MatInputModule, MatDividerModule
} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

const materials = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  HttpClientModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatFormFieldModule,
  MatGridListModule,
  MatSelectModule,
  MatInputModule,
  MatDividerModule
]

@NgModule({
  declarations: [],
  imports: [
    ...materials
  ],
  exports: [
    ...materials
  ]
})
export class MaterialModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIcon(
      'mficon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/mf_icon.svg')
    );
  }
}
