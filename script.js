let showMainArea = document.getElementById('showMainArea') 
let home = document.getElementById('home') 
let skills = document.getElementById('skills') 
let projects = document.getElementById('projects') 

window.addEventListener('load',()=>{
    showMainArea.removeChild(home)
    showMainArea.removeChild(skills)
    showMainArea.removeChild(projects)
    
})

function toggle(el){
    
    home.classList.add('hidden')
    skills.classList.add('hidden')
    projects.classList.add('hidden')
    

    showMainArea.appendChild(el)    
    el.classList.remove('hidden')
    
        
}


