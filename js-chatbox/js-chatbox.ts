import { Component, Input, OnInit } from '@angular/core';

import { ChatController } from '../controllers/chat.controller';
import { ChatsController } from '../controllers/chats.controller';
import { MsgController } from '../controllers/msg.controller';
import { ChatPopupsController } from '../controllers/chat-popups.controller';

@Component({
    selector:'js-chatbox',
    templateUrl:'./js-chatbox.html',
    styleUrls:['./js-chatbox.css']
})
export class JsChatbox implements OnInit{
    
    @Input() chat;
    
    private _chatController: ChatController;
    private _chatsController: ChatsController;
    private _msgController: MsgController;
    private _chatPopupsController: ChatPopupsController;
    
    private _openChat;
    private _newChatSettings;
    
    popupOptions;
    chatboxClosed; 
    
    constructor (
        chatController:ChatController, 
        chatsController:ChatsController, 
        msgController:MsgController,
        chatPopupsController: ChatPopupsController
    ){
        this._chatController = chatController;
        this._chatsController = chatsController;
        this._msgController = msgController;
        this._chatPopupsController = chatPopupsController
    }
     
    ngOnInit(){

        this.popupOptions = this._chatPopupsController.chatboxPopupOptions;
        
    }
    
    onGetChat(chat): void{

        this._openChat = [];     
        this.chat = chat;

    }
    
    createNewChatbox(): void{

        const newChat = this._chatController.setNewChat();
        this._chatController.createNewChatbox(newChat);
        
    }
    
    createNewChat(): void{

        this._chatsController.addNewChat(this.chat);
        this._openChat = [];

    }
    
    closeChatBox(){

        this.chatboxClosed = true;

    }
    
}