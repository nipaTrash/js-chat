import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ChatController } from '../controllers/chat.controller';
import { NbChatService } from '../../nb-services/nb-chat.service';

import { Chat } from '../chat';

@Injectable()
export class MsgController{
    
    
    private _chatController: ChatController;
    private _nbChatService: NbChatService;
    private _usersSelected = [];
    
    constructor(
        chatController:ChatController,
        nbChatService:NbChatService){
            this._chatController = chatController;
            this._nbChatService = nbChatService;
    }
    
    

    get usersSelected(){
        return this._usersSelected;
    }
    
    sendMsg(chat: Chat,chatMsg: string): string{

        this._nbChatService.createMsg(chat.id, chatMsg);
        this._chatController.updateChatLastUtc(chat);
    }
    
}