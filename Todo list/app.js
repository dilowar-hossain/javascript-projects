const textBox = document.getElementById('textBox')
const textNote = document.getElementById('textNote')

textBox.addEventListener(
    'keyup',
    function(event){
        if (event.key=='Enter'){
            addNote(this.value)
            this.value=""
        }
    }
    
)
const addNote = (textBox) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${textBox}
         <i class="fa-regular fa-circle-xmark"></i>
    `;
    textNote.appendChild(listItem)

    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            listItem.remove()
        }
    )
    textNote.appendChild(listItem)
}


function myfun() {
    alert("are you sure ?");
}