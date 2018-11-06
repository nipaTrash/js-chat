import { Component, Input } from '@angular/core';

import { ChatController } from '../controllers/chat.controller';
import { Msg } from '../msg';

@Component({
    selector:'chat-history',
    templateUrl:'./chat-history.component.html'
})
export class ChatHistoryComponent{
    
    @Input() chat;
    
    chatMsgs: Msg[];
    private _chatController: ChatController;
    
    constructor(chatController:ChatController){
        this._chatController = chatController;
    }


    ngOnChanges(): void{
        this.getChatMsgs();
    }
    

    getChatMsgs(){
        this._chatController.getChatMsgs(this.chat)
            .subscribe((res: Msg[]) => this.chatMsgs = res);
    }
    
}