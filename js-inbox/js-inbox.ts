import { Component, OnInit } from '@angular/core';

import { ChatController } from '../controllers/chat.controller';
import { ChatCssController } from '../controllers/chat-css.controller';

import { Chat } from '../chat'

@Component({
    selector:'js-inbox',
    templateUrl:'./js-inbox.html'
})
export class JsInbox implements OnInit{
    
    private _chatController: ChatController;
    private _chatCssController: ChatCssController;
    
    chat: Chat;
    
    css;
    
    constructor(chatController:ChatController,chatCssController:ChatCssController){

        this._chatController = chatController;
        this._chatCssController = chatCssController;
        
    }
    
    ngOnInit(){

        this.css = this._chatCssController.getCss('cssInbox');
        
    }
    onChatListItemClicked(event: Chat): void{
        this.chat = event;
    }

    createNewChatbox(): void{
        const newChat = this._chatController.setNewChat();
        this._chatController.createNewChatbox(newChat);
    }
}