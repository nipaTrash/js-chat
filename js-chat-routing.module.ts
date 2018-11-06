import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsChatComponent } from './js-chat.component';

import { jsChatRoute } from './js-chat.config';

const chatRoutes: Routes = [
    {path: jsChatRoute, component: JsChatComponent}
]
@NgModule({
    imports:[ RouterModule.forChild(chatRoutes)]
})
export class JsChatRoutingModule{}