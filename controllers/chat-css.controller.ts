import { Injectable } from '@angular/core';

import { cssJsChat } from '../../nb-config';

@Injectable()
export class ChatCssController{
    
    getCss(option){
        return cssJsChat[option];
    }
}