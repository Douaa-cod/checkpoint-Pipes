import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string): string {
    if (!value){
      return "tim_logo.png"
    }
    return value
  }

}
