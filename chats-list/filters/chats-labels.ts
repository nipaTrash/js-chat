import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup } from '@angular/forms';

import { ChatsController } from '../../controllers/chats.controller';

import { ChatPopupsController } from '../../controllers/chat-popups.controller';

import { iconEdit, iconLabel } from '../../js-chat.config';

import { ChatLabel } from '../../chat-label';

@Component({
    selector:'chats-labels',
    templateUrl:'./chats-labels.html'
})
export class ChatsLabels implements OnInit{
    
    private _chatsController: ChatsController;
    private _chatPopupsController: ChatPopupsController;
    
    labels = [];
    
    allLabelsName = 'All';
    
    labelDropdownOptions;
    
    constructor(chatsController:ChatsController, chatPopupsController:ChatPopupsController){
        this._chatsController = chatsController;
        this._chatPopupsController = chatPopupsController;
    }
    
    ngOnInit(){
        this._chatsController.getChatLabels()
            .subscribe((labels:ChatLabel[]) => {
                this.labels = labels;
            });
      
        
        const dropdownActions=[{id:'editLabels',name:'Editar',icon:iconEdit}];
        
        this.labelDropdownOptions = {
            buttonIcon: iconLabel,
            selectFirstEmpty:this.allLabelsName,
            selectItems:this.labels,
            actions: dropdownActions
        }
               
        
    }
    
    changeLabel(labelId){    
        this._chatsController.setFilterLabel(labelId);
    }
    
    onActionClicked(actionId){
        if(actionId == 'editLabels'){
            console.log('se dispara la funcion de editar');
            this.toggleLabelEditorPopup();
        }
    }
    
    toggleLabelEditorPopup(){
        this._chatPopupsController.isChatLabelsEditorOpen = !this._chatPopupsController.isChatLabelsEditorOpen;
    }
}