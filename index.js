"use strict";
//I might need to use FUNCTION EXPRESSION HERE
let Med = function (name, dosage, unit){
    this.name = name;
    this.dosage = dosage;
    this.unit = unit;
    //if doesn`t initiate, we won`t use 
    this.posology = function (dailyFrequency, dueTime) { 
        this.dailyFrequency = dailyFrequency;
        this.dueTime = dueTime;
    }
    //number will be passed by the catalogue handler function
    this.id = function (medNumberIdentification) {
        this.id = medNumberIdentification;
    }
    this.technicalDetails = function (param, param2, param3){
        this.substance = param;
        this.category = param2;
        this.lab = param3;
    }
};


//vector will store the meds, no datatype declaration needed, remember
//put the initialization below in another file later on 
const catalogue = [];
catalogue[0] = new Med("Secret", 70, "mg");
catalogue[0].id = new catalogue[0].id("001");

catalogue[1] = new Med("Secret", 50, "mg");
catalogue[1].id = new catalogue[1].id("002");

catalogue[2] = new Med("Secret", 25, "mg");
catalogue[2].id = new catalogue[2].id("003");








function MedUpper() {
    return 0;
}


let hashMed = new MedUpper();


let fichario = new Med("vyvanse", 50, "mg");
console.log(fichario);
fichario.patientUsage = new fichario.posology(1, "09:00");
console.log(fichario.patientUsage);
