/*This is a document to test some things of ES6 and above*/
/*Using basics from https://javascript.info/ javascript Fundamentals */
/*MedLogger integrated plataform */
"use strict";

/*Object definition*/
function Med(name, dosage, unit) {
    this.name = name;
    this.dosage = dosage;
    this.unit = unit;
    this.patientUsage = function (dailyFrequency, dueTime) {
        this.dailyFrequency = dailyFrequency;
        this.dueTime = dueTime;
    }
    this.patientDaily = []
}

let fichario = new Med("vyvanse", 50, "mg");
console.log(fichario);
fichario.patientUsage = new fichario.patientUsage(1, "09:00");
console.log(fichario.patientUsage);
