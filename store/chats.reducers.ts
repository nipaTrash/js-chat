import * as ChatsActions from './chats.actions'; 
import { Chat } from '../chat';
import { ChatLabel } from '../chat-label';


export interface State {
    chats: Chat[];
    labels: ChatLabel[];
    filterLabel: string;
}

export const initialState: State = {
    chats:[],
    labels:[],
    filterLabel: ''
}

export function chatsReducer (state = initialState, action:ChatsActions.ChatsActions){
    switch(action.type){
        case ChatsActions.ADD_CHAT:
            return {
                ...state,
                chats: [...state.chats, action.payload]
            };
        
        case ChatsActions.SET_CHAT_LABELS:
            return {
                ...state,
                labels: action.payload

            }
        case ChatsActions.ADD_CHAT_LABEL:
            return {
                ...state,
                labels: [...state.labels, action.payload]
            }
            
            
        case ChatsActions.SET_FILTER_LABEL:
            return {
                ...state,
                filterLabel: action.payload
            }

        case ChatsActions.UPDATE_CHAT:
            const index = state.chats.findIndex(pos => pos.id == action.payload.id);  

            const chats:Chat[] = [...state.chats];
            chats[index] = action.payload;

            return {
                ...state,
                chats: chats
            }
        

        default:
            return state;
    }

}