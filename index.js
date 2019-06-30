/*This is a document to test some things of ES6 and above*/
/*Using basics from https://javascript.info/ javascript Fundamentals */

"use strict";

let takenMed = {
    name : "Vyvanse",
    dosage : 50,
    unit : "mg",
    dailyFrequency : 1,
    dueTime : "09:00",
    takenTime : ""
};
/*Object definition*/
function Med(name, dosage, unit){
    this.name = name;
    this.dosage = dosage;
    this.unit = unit;
    this.patientUsage = function(dailyFrequency, dueTime){
        this.dailyFrequency = dailyFrequency;
        this.dueTime = dueTime;
    }
    this.patientDaily = []
}

/*output do console*/
let fichario = new Med("vyvanse", 50, "mg");
console.log(fichario);                                              // Object { name: "vyvanse", dosage: 50, unit: "mg", patientUsage: patientUsage(), patientDaily: [] }
fichario.patientUsage = new fichario.patientUsage(1, "09:00");      //Object { dailyFrequency: 1, dueTime: "09:00" }
console.log(fichario.patientUsage);                                 //Object { dailyFrequency: 1, dueTime: "09:00" }
