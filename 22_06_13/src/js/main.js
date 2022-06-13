let pharm = JSON.parse(localStorage.getItem("data_pharm")) || [];

class Client{
    constructor(id,nome,credit){
        this.id=id;
        this.nome=nome;
        this.credit=credit;
    }
}
class Medoc{
    constructor(id,nome,prix,stock){
        this.id=id;
        this.nome=nome
        this.prix=prix
        this.stock=stock
    }
}
class Pharma{
    constructor(nom,propritaire,client_list,medoc_list){

        this.nom=nom
        this.proprio=propritaire
        this.client_list=client_list
        this.medoc_list=medoc_list
    }
}
let main_client_list =[];
let main_medoc_list=[];
let first_name = ["Emma","Oliver ","Samuel","Anthony","Sebastian"];
let last_name = ["Schwarz","Gruber ","Frashëri","Hassan","John"];
for (i = 0; i < 20; i++) {
    let myname = first_name[Math.floor(Math.random()*first_name.length)] + " " +last_name[Math.floor(Math.random()*last_name.length)]
    main_client_list[i] = new Client(i,myname,100);
    
}
console.log(main_client_list)