const noteContent = document.querySelector("#writeNote");
const noteCreateBtn = document.querySelector("#noteCreateBox > button");

const finalBox = document.querySelector("#finalNoteBox");
let emptyMsz = document.querySelector("#emptyMsz");

const noteColor = document.querySelector("#noteColor")




noteCreateBtn.addEventListener("click",()=>{
    if(noteContent.value === ""){
        alert("Please input a note");
        return;
    }else {

        if(!emptyMsz.classList.contains("hidden")){
            emptyMsz.classList.add("hidden")
        }

        
        let div = document.createElement("div");
        div.innerHTML = `
            <p>${noteContent.value}</p>
            <span class="close-btn">X</span>
        `
        div.classList.add("note")
        div.style.backgroundColor = noteColor.value;

       
        finalBox.appendChild(div);
        noteContent.value = "";
    }
})




finalBox.addEventListener("click",(e) => {

    if(e.target.innerText === "X"){
        e.target.parentNode.remove();
    }
   
    if(notesContainer.children.length < 2){
        emptyMsz.classList.remove("hidden")
    }
})