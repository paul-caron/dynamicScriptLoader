async function dynamicScriptLoader(url){
    const s = document.createElement("script")
    const response = await fetch(url)
    const text = await response.text()
    s.innerHTML = text
    document.body.appendChild(s)
}
