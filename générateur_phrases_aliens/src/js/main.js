const V = "aeiouy" ; //declaration des voyelles
const C = "bcdfghjklmnpqrstvwxz"; //declaration des consonnes

//un randomme pour choisir les lettre
function find_letter(dico){
    return dico[Math.floor(Math.random()*dico.length)] ;
}
// un random pour les syllabes avec les lettre dans la fonction précedente
function find_syllab(){
    let nb_syll = Math.floor(Math.random()*2)+2 ; // ramene un entier entre 2 et 4
    let syll = ""; 
    for(i=0;i<=nb_syll;i++){
        if(Math.random() > 0.5) { //une pseudo boucle boolean pour choisir entre les lettres et consonnes
            syll+=find_letter(V);
        }
        else {
            syll+=find_letter(C);
        }
    }
    return syll+" " ;
}
function find_word(nbs){
    //une fonction pour générer des mots 
    let myword = "";
    for(j=0;j<=nbs;j++){
        myword += find_syllab();
    }
    return myword+" " ;
}
function find_phrase(nbw,nbs){
    //une fonction pour générer de phrases 
    let mytext = "";
    for(k=0;k<=nbw;k++){
        mytext += find_word(nbs)
    }
    alienText.innerText = mytext ; 
}
go.addEventListener("click",() => { //un boutton pour lancer la generation
    find_phrase(nbmots.value,max_syl.value);
});
