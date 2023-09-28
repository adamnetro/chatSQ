function searchPC(){
    let inpt = document.querySelector('.inpt');
    let itm = document.querySelectorAll('.itm');
    let nmPhn = document.querySelectorAll('.itm h1');
    let ntFn = document.querySelectorAll('.notFnd');
    let found = false;

    inpt.value = inpt.value.replaceAll('adam', '3amk')

    for( let i=0 ; i<nmPhn.length ; i++){
        if(nmPhn[i].innerHTML.toUpperCase().trim().includes(inpt.value.toUpperCase().trim().replaceAll(' ',''))){
            itm[i].style.display = ""
            found = true;
        }else{
            itm[i].style.display = "none"
        }

    }
    if(!found){
        ntFn[0].style.display = "block"
    }else{
        ntFn[0].style.display = "none"
    }

}

function req(){
    let req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let getData = JSON.parse(this.responseText)
            for( let i=0 ; i<getData.length ; i++){
            // __________________________________________________________________________________________________

                document.body.children[1].innerHTML += `<div style="background-color:${getData[i].clr};" class="itm">
                <img src="${getData[i].icon}">
                <h1>${getData[i].name}</h1>
            </div>`

            // __________________________________________________________________________________________________
            
        }
        }
    }
    req.open('GET', 'data.txt', true);
    req.send()
}

req()