import {Pipe, PipeTransform} from '@angular/core';
import {API} from '../../config/api';

@Pipe({
  name: 'fixImageUrl',
  pure: false
})
export class FixImageUrlPipe implements PipeTransform {

  transform(imageName: any, ...args: any[]): any {
    return `${API.IMAGES_BASE_URL}/projects/${imageName}`;
  }

}
