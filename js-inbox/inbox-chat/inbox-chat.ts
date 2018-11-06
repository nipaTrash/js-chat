import { Component, Input } from '@angular/core';

import { ChatsController } from '../../controllers/chats.controller';

@Component({
    selector:'inbox-chat',
    templateUrl:'./inbox-chat.html'
})
export class InboxChat{
    
    @Input() chat;
    
    private _chatsController:ChatsController;
    
    constructor(chatsController:ChatsController){
        this._chatsController = chatsController;
    }
    
}