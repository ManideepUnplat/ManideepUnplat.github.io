function openTabs(state: any,headId: string | number) {

    for(var e of state){
        if(e.headId==headId){
            for(var t of e.tabs){
                let url=""
                if(t.task.slice(0,7)=="http://" || t.task.slice(0,8)=="https://"){
                    url=t.task
                }
                else if(url.slice(0,4)=="www."){
                    url="https://"+t.task
                }
                else{
                    url="https://www.google.com/search?q="+t.task
                }
                //@ts-ignore
                chrome.tabs.create({ url: url });
            }
        }
    }
}

export default openTabs