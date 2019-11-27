import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatLabelPipe"
})
export class FormatLabelPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return value;
    }

    value = this.insertSpaceBeforeCapitalLetter(value);
    value = value.toLowerCase();
    value = this.toUpperCaseFirstLetter(value);

    return value;
  }

  insertSpaceBeforeCapitalLetter(value: string): string {
    let newValue = value.replace(/([a-z])([A-Z])/g, "$1 $2");
    newValue = newValue.replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
    return newValue;
  }

  toUpperCaseFirstLetter (value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
