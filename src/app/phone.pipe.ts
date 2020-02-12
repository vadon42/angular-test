import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(value: number): string {
    return value.toString().replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/ ,
      (...arg) : string => `+${arg[1]}(${arg[2]})${arg[3]}-${arg[4]}-${arg[5]}`
    )
  }
}
