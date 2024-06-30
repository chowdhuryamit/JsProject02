let list=document.querySelectorAll('.list');
let rightBox=document.getElementById('right');
let leftBox=document.getElementById('left');
list.forEach((ele)=>{
    ele.addEventListener('dragstart',(e)=>{
        let selected=e.target;
        if (e.target.tagName!=='IMG') {
            rightBox.addEventListener('dragover',(e)=>{
                e.preventDefault();
            })
            rightBox.addEventListener('drop',(e)=>{
                rightBox.appendChild(selected);
                selected=null;
            })
            leftBox.addEventListener('dragover',(e)=>{
                e.preventDefault();
            })
            leftBox.addEventListener('drop',(e)=>{
                leftBox.appendChild(selected);
                selected=null;
            })
        }
    })
})