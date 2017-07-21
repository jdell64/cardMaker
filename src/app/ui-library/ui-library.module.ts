import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdCardModule, MdSnackBarModule} from '@angular/material';

@NgModule({
  imports: [
    MdCardModule,
    MdSnackBarModule,
    CommonModule
  ],
  exports: [MdCardModule, MdSnackBarModule],
  declarations: []
})
export class UiLibraryModule {
}
