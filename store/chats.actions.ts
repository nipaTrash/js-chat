import { Action } from '@ngrx/store';
import { Chat } from '../chat';
import { ChatLabel } from '../chat-label';

export const ADD_CHAT = 'ADD_CHAT';
export const SET_CHAT_LABELS = 'SET_CHAT_LABELS';
export const ADD_CHAT_LABEL = 'ADD_CHAT_LABEL';
export const SET_FILTER_LABEL = 'SET_FILTER_LABELS';

export const UPDATE_CHAT = 'UPDATE_CHAT';

export class AddChat implements Action{

    readonly type = ADD_CHAT;

    constructor(public payload: Chat){}

}

export class SetChatLabels implements Action{
    readonly type = SET_CHAT_LABELS;

    constructor (public payload: ChatLabel[]){}
}

export class AddChatLabel implements Action{
    readonly type = ADD_CHAT_LABEL;

    constructor(public payload: ChatLabel){}
}

export class SetFilterLabel implements Action{
    readonly type = SET_FILTER_LABEL;

    constructor(public payload: string){}
}
export class UpdateChat implements Action{
    readonly type = UPDATE_CHAT;

    constructor(public payload: Chat){}
}
export type ChatsActions = AddChat | SetChatLabels | AddChatLabel | SetFilterLabel | UpdateChat;