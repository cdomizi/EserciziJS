let totale= 0;
  
function preset(z){
    totale=z.totale;
    console.log(totale);
    let sel=document.getElementById("selectAllievo");
    for(let i=1; i<=totale; i++){
        let opt=document.createElement('option');
        opt.textContent=i.toString();
        opt.value=i.toString();
        console.log(opt);
        sel.appendChild(opt);
    }
    sel.addEventListener("input", tryfetch2);
    sel.disabled=false;
}

fetch("countMax.php")
    .then(r => r.json())
    .then(b => preset(b)) //<-prima ottengo il totale

function mostra(hs){
    document.getElementById("nome").textContent=hs.nome;
    document.getElementById("cognome").textContent=hs.cognome;
    document.getElementById("anni").textContent=hs.eta;
}

function tryfetch() {
    fetch("allievi.php?" + new URLSearchParams(
    {id: Math.floor(Math.random() * totale) + 1}))
    .then(r => r.json())
    .then(b => mostra(b))//richiamo il mostra
}

function tryfetch2(e) {
    fetch("allievi.php?" + new URLSearchParams(
    {id: e.target.value}))
    .then(r => {
        if (r.ok && r.headers.get("Content-Type") === "application/json") {
            return r.json()
        } else {
            throw new Error("Qualcosa è andato storto.")
        }
    })
    .then(b => mostra(b))//richiamo il mostra */
    .catch(error => {
        console.log("Ho identificato l'errore " + error)
    })
}
      
