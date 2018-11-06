import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'chatsFilter'
})
export class ChatsFilterPipe implements PipeTransform{
    transform(value:any, filterState:boolean | string | number, propName: string):any{
        
        if (filterState == 0 || filterState === ''){
            return value;
        }
        
        const resultArray = [];
        for (const item of value){
            if(item[propName] === filterState || item[propName] > 0){
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}