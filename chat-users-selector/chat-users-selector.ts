import { Component, Input } from'@angular/core';

import { ChatsController } from '../controllers/chats.controller';

@Component({
    selector:'chat-users-selector',
    templateUrl:'./chat-users-selector.html'
})
export class ChatUsersSelector{
    
    @Input() usersSelected;
    
    private _chatsController: ChatsController;
    
    constructor(chatsController:ChatsController){
        this._chatsController = chatsController;
    }
    
    get usersAllowed(){
        return this._chatsController.usersAllowed;
    }

}