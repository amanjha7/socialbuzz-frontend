import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { UppercasePipe } from './shared/pipes/uppercase.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HighlightDirective,
    UppercasePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
