import { Pipe, PipeTransform } from '@angular/core';
import { ItemList } from '../../models/item-list.model';

/**
 * Generated class for the FilterCompletedPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filterCompleted',
  pure: false
})
export class FilterCompletedPipe implements PipeTransform {

  transform(lists: ItemList[], completed:boolean) {
      return lists.filter(list => list.finished == completed);
  }

}
