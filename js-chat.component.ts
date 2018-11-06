import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { ChatsController } from './controllers/chats.controller';
import { ChatPopupsController } from './controllers/chat-popups.controller';

import { routerFadeStateTrigger, routerDropStateTrigger } from '../nb-animations/router-animations';

@Component({
    selector:'js-chat',
    templateUrl:'./js-chat.component.html',
    styleUrls:['js-chat.component.css'],
    animations:[
        routerFadeStateTrigger,
        routerDropStateTrigger
    ]
})
export class JsChatComponent implements OnInit{
    
    @HostBinding('@routerFadeState') routerAnimationFade;
    @HostBinding('@routerDropState') routerAnimationDrop;

    @Input() inboxHidden;
    
    private _chatsController: ChatsController;
    private _totalUnread:number;
    private _chatPopupsController:ChatPopupsController;
    private _routerAnimation: string;

    get labelEditorOpen(){
        return this._chatPopupsController.labelEditorOpen;
    }
    
    constructor (chatsController:ChatsController, chatPopupsController:ChatPopupsController){
        this._chatsController = chatsController;
        this._chatPopupsController = chatPopupsController;
    }
    
    ngOnInit(){
        this._routerAnimation = this._chatsController.getRouterAnimation();

        this.routerAnimationFade = this._routerAnimation;
        this.routerAnimationDrop = this._routerAnimation;
        
        this._totalUnread = this._chatsController.setTotalUnread()

        const temporalProfile = 'peter1398235773'//TODO get it from the service
        this._chatsController.setChats(temporalProfile);
        this._chatsController.setChatLabels();
    }
}