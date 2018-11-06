export class ChatPopupsController{
    
    isChatLabelsEditorOpen = false;
    
    chatLabelsEditorPopupOptions = {
        title:'Editat Carpetas',
        open:true,
        head:true,
        closeBtn:true,
        minMaxBtn: true,
        saveBtn:true,
        cancelBtn:true
    }
    
    chatboxPopupOptions = {
        title:'chatboxx',
        open:true,
        head:true,
        closeBtn:true,
        minMaxBtn: true,
        fullscreenAllow:true,
        fullscreen:true,
        saveBtn:false,
        cancelBtn:false
    }
    
    get labelEditorOpen(){
        return this.isChatLabelsEditorOpen;
    }
}