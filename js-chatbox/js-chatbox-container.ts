import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { ChatController } from '../controllers/chat.controller';

import { JsChatbox } from './js-chatbox';

@Component({
    selector:'js-chatbox-container',
    templateUrl:'./js-chatbox-container.html',
    styleUrls:['./js-chatbox-container.css']
})
export class JsChatboxContainer implements OnInit{
    
    @ViewChild('newChatbox',{read:ViewContainerRef}) newChatbox;

    private _chatController: ChatController;
    private _resolver:ComponentFactoryResolver;
    
    constructor(chatController: ChatController, resolver: ComponentFactoryResolver){
        this._chatController = chatController;
        this._resolver = resolver;
    }
    
    onClick(){
        this.createNewChatbox();
    }
     
    createNewChatbox(chatInfo?){

        const newChatboxFactory = this._resolver.resolveComponentFactory(JsChatbox);
        const newChatboxRef = this.newChatbox.createComponent(newChatboxFactory);
        newChatboxRef.instance.chat = chatInfo;
    }
     
    ngOnInit(){
        this._chatController.newChatCreated
            .subscribe(chatInfo=>{
                this.createNewChatbox(chatInfo);
            })
    }
    
    
}