import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ChatDetails } from '../chat-details';

import { ChatsController } from '../controllers/chats.controller';
import { ChatController } from '../controllers/chat.controller';
import { ChatCssController } from '../controllers/chat-css.controller';

import { Msg } from '../msg';
import { ChatLabel } from '../chat-label';

@Component({
    selector:'chats-list-item',
    templateUrl:'./chats-list-item.html'
})
export class ChatsListItem implements OnInit{
    
    @Input() chatDetails: ChatDetails;
    
    @Output() chatListItemClicked: EventEmitter<any> = new EventEmitter();
    
    showDropdown = false;
    
    lastMsgDetails: Msg;
    css;
    
    labels: ChatLabel[];
    labelSelectOptions;
   
    private _chatsController: ChatsController;
    private _chatController: ChatController;
    private _chatCssController: ChatCssController;
    
    
    constructor(chatsController: ChatsController, chatController: ChatController, chatCssController:ChatCssController){
        this._chatsController = chatsController;
        this._chatController = chatController;
        this._chatCssController = chatCssController;
    }
    
    ngOnInit(){
        
        this.labelSelectOptions={
            firstEmpty:'All',
            selected:this.chatDetails.label
        }
        
        this.css = this._chatCssController.getCss('cssInbox');
        
        this.getLastMsgInfo();

        this.getChatLabels();
    }
    
    getChatLabels(): void{
        this._chatsController.getChatLabels()
        .subscribe((labels:ChatLabel[]) => this.labels = labels);
    }
    getLastMsgInfo(): void{
        this._chatController.getLastMsgInfo(this.chatDetails)
            .subscribe((res: Msg) => {
                this.lastMsgDetails = res;
            });
    }
    
    onChangeLabelSelect(valueSelected: string): void{
        this.changeChatLabel(valueSelected)
    }
    

    updateChatProfileInfo(): void{
        this._chatController.updateChatProfileInfo(this.chatDetails);
    }

    changeChatLabel(value): void{
        this.chatDetails.label = value;
        this.updateChatProfileInfo();
    }
    
    resetUnread(): void{
        this.chatDetails.unread = 0;
        this.updateChatProfileInfo();
    }

    toggleFlag(): void{
        this.chatDetails.flag = !this.chatDetails.flag;
        this.updateChatProfileInfo();
    }


    onClickChatListItem(): void{
        this.resetUnread();
        this.chatListItemClicked.emit(this.chatDetails)
        
    }
    

  
}