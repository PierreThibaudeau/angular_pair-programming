import {Pipe, PipeTransform} from '@angular/core';
import {truncate} from 'lodash';

@Pipe({name: 'truncatePipe'})
export class TruncatePipe implements PipeTransform{
    transform(value, lengthTruncate) {
        return truncate(value, {length: lengthTruncate });
    }
}
