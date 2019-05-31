import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: [], term: string = ''): any[] {

    return value.filter((x:any) => {
      if(x.name !==undefined && term !== undefined) {
        return x.name.toLowerCase().startsWith(term.toLowerCase())
      } else if (x.title !== undefined && term !== undefined) {
        return x.title.toLowerCase().startsWith(term.toLowerCase())
      }
    })
  }

}
