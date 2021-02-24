import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollSpyDirective } from '../shared/directive/scroll-spy.directive';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';



@NgModule({
    imports: [ RouterModule, CommonModule],
    declarations: [ScrollSpyDirective,FooterComponent,NavbarComponent,FilterPipe],
    exports: [ScrollSpyDirective,FooterComponent,NavbarComponent,FilterPipe],
    
})

export class SharedModule {}