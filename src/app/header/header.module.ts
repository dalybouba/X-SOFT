import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderRoutingModule } from './header-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header.component';



@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        HeaderRoutingModule],
    declarations: [HeaderComponent],
    exports:[HeaderComponent]

})
export class HeaderModule { }