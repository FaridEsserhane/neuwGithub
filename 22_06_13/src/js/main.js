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

/* fichier pierre

        // emulate external storage 
        let main_client_list = [];
        let main_medoc_list = [];
        // fixture 
        let first_names = ["roger","michel","emile","louise","renée"];
        let last_names = ["Mouloud","Sanchez","Giocanti","James","Merkel","Ikea"];
        let medoc_names = ["doliprane","temesta","prozac","ketamine","viagra","betadine","smecta","vogalene"];
        let medoc_condition = ["20","250","3000"]
        // generate client_list 
        for(i=0;i<20;i++){
            let myname = first_names[Math.floor(Math.random()*first_names.length)] + " " + last_names[Math.floor(Math.random()*last_names.length)];
            main_client_list[i] = new Client(i,myname,100);
        }
        // generate medoc list 
        for(j=0;j<30;j++){
            let mymedoc = medoc_names[Math.floor(Math.random()*medoc_names.length)] + "-" + medoc_condition[Math.floor(Math.random()*medoc_condition.length)];
            main_medoc_list[j] = new Medoc(j,mymedoc,(Math.random()*100).toFixed(2),100);
        }


*/