import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromNb from '../../nb-store/nb.reducers';
import * as ChatsActions from '../store/chats.actions';

import { Msg } from '../msg';

import { NbChatService } from '../../nb-services/nb-chat.service';

import * as config from '../../nb-config';

import { NbChatProfileInfo } from '../../nb-models/nb-chat-profile-info';
import { NbChat } from '../../nb-models/nb-chat';



@Injectable()
export class ChatController{
    
    profileActive = 'peter1398235773'; //TODO take it from service

    newChatCreated = new Subject<string>();
    

    private _nbChatService: NbChatService;
    
    constructor( nbChatService:NbChatService, private _store:Store<fromNb.nbState> ){

        this._nbChatService = nbChatService;
    }
    

    getChatMsgs(chat): void{
        return this._nbChatService.getChatMsgs(chat.id)
            .map((msgs:Msg[]) => {
                let chatMsgs = [];
                for (let msg of msgs){  
                    this.getMsg(chat.id,msg).subscribe(res => chatMsgs.push(res));
                }
                return chatMsgs;
            });
            
    }

    getLastMsgInfo(chatDetails): Observable<Object>{

        return this.getMsg(chatDetails.id, chatDetails.lastMsg);

    }


    getMsg(chatId: string, msg: Msg): Observable<Object>{

        return this._nbChatService.getChatMsg(chatId,msg);

    }

    
    getChat(chat: NbChat): void{
        
        return this._store.select('chats')
            .map(response => {return response.chats})
            .map(chats => chats.filter(c => c.id === chat.id));

    }
    
    
    updateChat(chat: NbChat): void{
        this._store.dispatch(new ChatsActions.UpdateChat(chat));
    }

    updateChatProfileInfo(chat): void{
        const chatProfileInfo = this._nbChatService.extractProfileInfo(chat);

        this._nbChatService.updateChatProfileInfo(chatProfileInfo).subscribe(res => {
            this.updateChat(chat);
        });

    }

    updateChatShareInfo(chat: NbChat): void{
        
        const chatShareInfo = this._nbChatService.extractShareInfo(chat);

        chatShareInfo.utc = new Date().getTime();
        
        this._nbChatService.updateChatShareInfo(chatShareInfo)
           .subscribe(res => {
                this.updateChat(chat);
            })
    }

    updateChatLastUtc(chat: NbChat): void{
        chat.utc = new Date().getTime();
        this.updateChatShareInfo(chat);
    }

    setNewChat(newChatValues?){
        const newChatId = this.setChatId();
        const newChatDefault = {id:newChatId,title:'',content:'',users:[],from:'',unread:0,flag:false,label:''}
        const newChat = Object.assign(newChatDefault,newChatValues);
        return newChat;
    }

    setChatId(){
        return new Date().getTime();
    }

    createNewChatbox(newChatInfo?){
        console.log('crea chat NEWCHATBOX');
        this.newChatCreated.next(newChatInfo);
    }
    
}