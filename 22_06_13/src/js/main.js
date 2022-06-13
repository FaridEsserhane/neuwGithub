let pharm = JSON.parse(localStorage.getItem("data_pharm")) || [];


let main_client_list =[];
let main_medoc_list=[];
let first_name = ["Emma","Oliver ","Samuel","Anthony","Sebastian"];
let last_name = ["Schwarz","Gruber ","Frashëri","Hassan","John"];

let medoc_name = ["doliprane","termesta ","BENZYLIQUE ","BENZALKONIUM","CHLORHEXIDINE"];
let medoc_condition = ["20g","250g ","3kg"];

for (i = 0; i < 20; i++) {
    let myname = first_name[Math.floor(Math.random()*first_name.length)] + " " + last_name[Math.floor(Math.random()*last_name.length)]
    main_client_list[i] = new Client(i,myname,100);
    
}


for (j = 0; j < 20; j++) {
    let mymedoc = medoc_name[Math.floor(Math.random()*medoc_name.length)] + " / " + medoc_condition[Math.floor(Math.random()*medoc_condition.length)]
    main_medoc_list[j] = new Medoc(j,mymedoc,Math.random()*100,100);
    
    
}

console.table(main_medoc_list)

// console.log(pharm);
//localStorage.setItem("data", JSON.stringify(pharm));