// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const msgArea = document.createElement("div")
msgArea.innerHTML = new Date().toLocaleTimeString()
document.body.appendChild(msgArea)

const myproc = ()=>{
  const now = new Date()
  const hh = now.getHours()
  if(hh<12) {
    msgArea.innerHTML = "午前中の勉強時間"
    //document.body.appendChild(elm)
  }
  if(hh>20 && hh <22) {
    msgArea.innerHTML = "もうそろそろ寝る時間"
    //document.body.appendChild(elm)
  }
  if(hh>=22) {
    msgArea.innerHTML = "もう寝る時間"
    //document.body.appendChild(elm)
  }

  setTimeout(myproc,10000)
}

myproc()