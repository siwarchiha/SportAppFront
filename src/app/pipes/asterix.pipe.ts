import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch: String) {
    let chaine: any="";
    let voyels = ["a","e","y","u","i","o"]
    for (let i = 0 ; i < ch.length ; i++) {
      let interm = ch[i];
      for (let j = 0; j < voyels.length; j++) {
        if(ch[i].toLowerCase()==voyels[j]){
          interm="*";
          break;
        }
        
        
      }
      chaine += interm;
      
      

    }
    return chaine;

  }

}


