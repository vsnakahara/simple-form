import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { GeneralInputComponent } from './general-input.component';

@NgModule({
    declarations: [GeneralInputComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [GeneralInputComponent]
})
export class GeneralInputModule {

}