const search = (url: string) => {
        if(url.slice(0,7)=="http://" || url.slice(0,8)=="https://"){
          window.location.href=url
        }
        else if(url.slice(0,4)=="www."){
          window.location.href="https://"+url
        }
        else{
          window.location.href="https://www.google.com/search?q="+url
        }
}

export default search