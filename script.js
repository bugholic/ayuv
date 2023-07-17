let showMainArea = document.getElementById('showMainArea') 
let home = document.getElementById('home') 
let skills = document.getElementById('skills') 
let projects = document.getElementById('projects') 
let projectCategory = document.getElementById('projectCategory') 

window.addEventListener('load',()=>{
    showMainArea.removeChild(home)
    showMainArea.removeChild(skills)
    showMainArea.removeChild(projects)
    showMainArea.removeChild(projectCategory)
    
})

function toggle(el){
    
    home.classList.add('hidden')
    skills.classList.add('hidden')
    projects.classList.add('hidden')
    projectCategory.classList.add('hidden')
    

    showMainArea.appendChild(el)    
    el.classList.remove('hidden')
    
        
}


