import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

const GENERAL_INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => GeneralInputComponent),
  multi: true
};

@Component({
  selector: "app-general-input",
  templateUrl: "./general-input.component.html",
  styleUrls: ["./general-input.component.scss"],
  providers: [GENERAL_INPUT_VALUE_ACCESSOR]
})
export class GeneralInputComponent implements ControlValueAccessor {
  @Input() size = "100";
  @Input() placeholderText = "Digite um nome";
  @Input() fieldLabel = "Campo";
  @Input() errorMessage: string;

  value;

  _onChange = (_: any) => {};
  _onTouch = (_: any) => {};

  writeValue(obj: any): void {
    if (!obj) {
      obj = "";
    }
    if (obj === this.value) {
      return;
    }

    this.value = obj;
    this.updateChanges();
  }
  registerOnChange(fn: (val: any) => void): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}

  updateChanges() {
    this._onChange(this.value);
  }
}
