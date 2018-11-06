import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import * as config from '../../nb-config';

import { Store } from '@ngrx/store';
import * as fromNb from '../../nb-store/nb.reducers';
import * as ChatsActions from '../store/chats.actions';

import { NbChatService } from '../../nb-services/nb-chat.service';
import { NbAnimationsService } from '../../nb-services/nb-animations.service';

import { ChatDetails } from '../chat-details';
import { Chat } from '../chat';
import { ChatLabel } from '../chat-label';


@Injectable()
export class ChatsController{
        
    profileActive = 'peter1398235773'; //TODO get them from the service
    private _usersAllowed = [
        {id:'usuariouno',name:'Alfredo'},
        {id:'usuariodos',name:'George'},
        {id:'usuariotres',name:'Andres'}
    ]

    private _filterUnreadState: boolean = false;
    private _filterFlagState:boolean = false;
    private _filterLabel: string = '';

    public chats: ChatDetails[]= [];
    private _newChats: ChatDetails[] = [];
    
    private _nbChatService:NbChatService;
    private _nbAnimationsService: NbAnimationsService;

    constructor (nbChatService:NbChatService, nbAnimationsService: NbAnimationsService, private _store:Store<fromNb.nbState> ){
        
        this._nbChatService = nbChatService;
        this._nbAnimationsService = nbAnimationsService;


    }
   
    
    

    
    

    setChats(profile){
            
        const profiles = ['peter','adolf'];//TODO get them from the service
        
        this._nbChatService.getChats(profiles)
            .map(chats =>{
                
                return chats.map(chat => {
                    if(chat.id){

                        this.getChatDetails(chat.id)
                            .map(res =>{
                                Object.assign(res,chat);
                                
                                return res;
                            })
                            .subscribe((res:any) => {  

                                this.chats.push(res);
                                this._store.dispatch(new ChatsActions.AddChat(res));
                            });
                    }
                })
            })
            .subscribe();
       
    }
    
    getChatDetails(chatId){         
        return this._nbChatService.getChatDetails(chatId);
    }

    getChats(){
        return this._store.select('chats')
            .map((res:any) => res = res.chats);
    }

    setChatLabels(){
        
        this._nbChatService.getChatLabelsItem()
            .subscribe((res:any) => {
                this._store.dispatch(new ChatsActions.SetChatLabels(res))
            });

    }
 
    getChatLabels(): void{
        return this._store.select('chats')
            .map(res => res.labels);
    }

    compareObjects(a,b): boolean{

        for (let [key, value] of Object.entries(a)){
           
           if (b[key] !== value) return false;
        }
       
       return true;
    }

    saveChatLabels(): void{

        var labelsOrder = [];
        this.getChatLabels()
            .map(labels => labels.map(label => labelsOrder.push(label.id)))
            .subscribe(res => {
                this._nbChatService.saveChatLabelsOrder(labelsOrder).subscribe();
            });

        this._nbChatService.getChatLabelsOrder()
            .subscribe((labelsOrigin: ChatLabel[]) => {
                this.getChatLabels()
                    .subscribe(labels => labels.map(label => {
                        const index = labelsOrigin.findIndex(pos => pos.id === label.id);

                        var labelToSave = true;
                        if (index > -1){
                            labelToSave = !this.compareObjects(labelsOrigin[index], label);
                        }
                        if(labelToSave){
                            this._nbChatService.saveChatLabel(label).subscribe(res=>console.log(res));
                        }
                        
                    }));
            });
    }

    sortByUtcDesc(a,b): number{
        if (a.utc > b.utc) return -1;
        if (a.utc < b.utc) return 1;
        return 0;

    }
    
    get filterUnreadState(): boolean{
        return this._filterUnreadState;
    }
    
    get filterFlagState(): boolean{
        return this._filterFlagState;
    }
     
    get usersAllowed(){
        return this._usersAllowed;
    }
    
    setTotalUnread(): number{
        let total = 0;
        for(let chat of this.chats){
            total += chat.unread;
        }
        return total;
    }
    
    setFilterUnread(): void{
        this._filterUnreadState = !this._filterUnreadState;
    }
    setFilterFlag(): void{
        this._filterFlagState = !this._filterFlagState;
    }
    
    setFilterLabel(labelId: string): void{
        this._filterLabel = labelId;
        this._store.dispatch( new ChatsActions.SetFilterLabel(labelId));
    }
    
    getFilterLabel(): string{
        return this._store.select('chats').map(res=>{
            return res.filterLabel
            
        });
    }
     
    addNewChat(newChat: ChatDetails): void{
        
        const index = this._newChats.findIndex(pos => pos.id == newChat.id);
        
        if(index>=0){
            const newOb = Object.assign(this._newChats[index],newChat);
        }else{
            
            this._newChats.push(newChat);
        }
        
    }

    addNewChatToChats(chatId: string): void{
        const index = this._newChats.findIndex(pos => pos.id == chatId);
        if(index >= 0){
            
            
        }
    }

    getRouterAnimation(){
        return this._nbAnimationsService.routerAnimation;
    }
    
}