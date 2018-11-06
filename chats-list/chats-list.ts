import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { ChatDetails } from '../chat-details';

import { ChatsController } from '../controllers/chats.controller';

import { Chat } from '../chat';


declare var firebase: any;

@Component({
    selector:'chats-list',
    templateUrl:'./chats-list.html'
})
export class ChatsList implements OnInit{
    
    @Output() chatListItemClicked: EventEmitter<any> = new EventEmitter();

    private _chatsController: ChatsController;
    
    chats: Chat[];
    
    private subscription:Subscription;
    private _filterRead;
    
    filterLabel;

    
    constructor(chatsController: ChatsController){
        this._chatsController = chatsController;
    }
    
    ngOnInit(){
        this.getChats();

        this._chatsController.getFilterLabel().subscribe(res => this.filterLabel = res);
    }

    getChats(): void{ 
        this._chatsController.getChats()
            .subscribe((chats: Chat[]) => this.chats = chats);
    }
    
  
    get filterUnreadState(): boolean{
        return this._chatsController.filterUnreadState;
    }
    get filterFlagState(): boolean{
        return this._chatsController.filterFlagState;
    }  
    
    onChatListItemClicked(event): void{
        this.chatListItemClicked.emit(event);
    }

}