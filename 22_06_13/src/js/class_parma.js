class Client{
    constructor(id,nom,credit){
        this.id=id;
        this.nom=nom;
        this.credit=credit;
    }
}
class Medoc{
    constructor(id,nom,prix,stock){
        this.id=id;
        this.nom=nom
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
    affiche(){
        this.affiche_cliens();
        this.affiche_medocs();
    }

    affiche_medocs(){
        for(let medoc of this.main_medoc_list){
            console.table(medoc)
        }
    };
    affiche_cliens(){
        for(let client of this.main_client_list){
            console.log(client.id + " : " + client.nom + " " + client.nom)
        }
    };
}

