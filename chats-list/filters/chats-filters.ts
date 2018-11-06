import { Component } from '@angular/core';


import { ChatsController } from '../../controllers/chats.controller';

@Component({
    selector:'chats-filters',
    templateUrl:'./chats-filters.html'
})
export class ChatsFilters{
    
    private _chatsController:ChatsController;
        
    
    constructor(chatsController:ChatsController){
        this._chatsController = chatsController
    }
    
    get filterUnreadState(){
        return this._chatsController.filterUnreadState;
    }
    
    get filterFlatState(){
        return this._chatsController.filterFlagState;
    }
   
    onClickFilterUnread(){
        this._chatsController.setFilterUnread();
    }
    onClickFilterFlag(){
        this._chatsController.setFilterFlag();
    }
    
}