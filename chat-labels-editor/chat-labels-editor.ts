import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { ChatsController } from '../controllers/chats.controller';
import { ChatPopupsController } from '../controllers/chat-popups.controller';

@Component({
    selector:'chat-labels-editor',
    templateUrl:'./chat-labels-editor.html',
    styleUrls:['./chat-labels-editor.css']
})
export class ChatLabelsEditor implements OnInit{
    
    private _chatsController: ChatsController;
    private _chatPopupsController: ChatPopupsController;
    
    labels = [];
    popupOptions;
    
    constructor(chatsController:ChatsController, chatPopupsController: ChatPopupsController){
        this._chatsController = chatsController;
        this._chatPopupsController = chatPopupsController;
    }
    
    ngOnInit(){
        this.popupOptions = this._chatPopupsController.chatLabelsEditorPopupOptions;
        this._chatsController.getChatLabels()
            .subscribe(res => this.labels  = res);
    }
    
    onClosePopup(event?): void{
        this.closePopup();
    }
    
    onSave(event: boolean): void{
        this.saveLabels();
        this.closePopup();
    }
    
    onCancel(event: boolean): void{
        this.resetLabels();
        this.closePopup();
    }
    
    closePopup(): void{
        this._chatPopupsController.isChatLabelsEditorOpen = false;
    }
    
    saveLabels(): void{
        this._chatsController.saveChatLabels();
    }

    resetLabels(): void{
        this._chatsController.setChatLabels();
    }
    
}