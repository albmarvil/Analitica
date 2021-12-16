
///// TODO 

///ADD PARAMETERS

///ADD TRANSLATION SUPPORT

///MOVE DATA TO STANDALONE FILE

///PROTEINOGRAMA

///SECTION AND SUBSECTIONS

//ONLY ONE SECTION (Original analisis)

/////TODOEND




// import 'data.js'

class ParamData 
{
    constructor (ID, CAT, ES, SHOW)
    {
        this.ID = ID.normalize();
        this.CAT = CAT.normalize();
        this.ES = ES.normalize();
        this.SHOW = SHOW;
    }
}

var ALLOWED_SECTIONS = new Map();
////////////////           ID                                             //// ID                           ////     CAT                       /////   ES
ALLOWED_SECTIONS.set("ESTUDI ELEMENTS FORMES",          new ParamData("ESTUDI ELEMENTS FORMES",             "ESTUDI ELEMENTS FORMES",           "ESTUDI ELEMENTS FORMES",           true));
ALLOWED_SECTIONS.set("SUBSTRATS",                       new ParamData("SUBSTRATS",                          "SUBSTRATS",                        "SUBSTRATS",                        true));
ALLOWED_SECTIONS.set("HEMOGRAMA",                       new ParamData("HEMOGRAMA",                          "HEMOGRAMA",                        "HEMOGRAMA",                        true));
ALLOWED_SECTIONS.set("HEMOSTÀSIA BÀSICA I D'URGÈNCIES", new ParamData("HEMOSTÀSIA BÀSICA I D'URGÈNCIES",    "HEMOSTÀSIA BÀSICA I D'URGÈNCIES",  "HEMOSTÀSIA BÀSICA I D'URGÈNCIES",  true));
ALLOWED_SECTIONS.set("IONS",                            new ParamData("IONS",                               "IONS",                             "IONS",                             true));
ALLOWED_SECTIONS.set("GASOS EN SANG",                   new ParamData("GASOS EN SANG",                      "GASOS EN SANG",                    "GASOS EN SANG",                    true));
ALLOWED_SECTIONS.set("ENZIMS",                          new ParamData("ENZIMS",                             "ENZIMS",                           "ENZIMS",                           true));
ALLOWED_SECTIONS.set("LIPIDS i LIPOPROTEÏNES",          new ParamData("LIPIDS i LIPOPROTEÏNES",             "LIPIDS i LIPOPROTEÏNES",           "LIPIDS i LIPOPROTEÏNES",           true));
ALLOWED_SECTIONS.set("ESTUDI VIROLÒGIC",                new ParamData("ESTUDI VIROLÒGIC",                   "ESTUDI VIROLÒGIC",                 "ESTUDI VIROLÒGIC",                 true));
ALLOWED_SECTIONS.set("PROTEÏNES",                       new ParamData("PROTEÏNES",                          "PROTEÏNES",                        "PROTEÏNES",                        true));


var ALLOWED_PARAMETERS = new Map();

////////////////           ID                                                       //////      ID                                                           ////     CAT                                                    /////   ES
ALLOWED_PARAMETERS.set("Uri-Leucòcits",                                             new ParamData("Uri-Leucòcits",                                          "Uri-Leucòcits",                                                "Uri-Leucòcits",                                                false));
ALLOWED_PARAMETERS.set("Uri-Eritròcits dismòrfics",                                 new ParamData("Uri-Eritròcits dismòrfics",                              "Uri-Eritròcits dismòrfics",                                    "Uri-Eritròcits dismòrfics",                                    true));
ALLOWED_PARAMETERS.set("Uri-Eritròcits",                                            new ParamData("Uri-Eritròcits",                                         "Uri-Eritròcits",                                               "Uri-Eritròcits",                                               false));
ALLOWED_PARAMETERS.set("Uri-Cèl·lules epitelials",                                  new ParamData("Uri-Cèl·lules epitelials",                               "Uri-Cèl·lules epitelials",                                     "Uri-Cèl·lules epitelials",                                     false));
ALLOWED_PARAMETERS.set("Uri-Cilindres hialins",                                     new ParamData("Uri-Cilindres hialins",                                  "Uri-Cilindres hialins",                                        "Uri-Cilindres hialins",                                        true));
ALLOWED_PARAMETERS.set("Uri-Bacteris",                                              new ParamData("Uri-Bacteris",                                           "Uri-Bacteris",                                                 "Uri-Bacteris",                                                 true));
ALLOWED_PARAMETERS.set("Uri-Llevats",                                               new ParamData("Uri-Llevats",                                            "Uri-Llevats",                                                  "Uri-Llevats",                                                  true));
ALLOWED_PARAMETERS.set("Uri-Creatinini orina recent",                               new ParamData("Uri-Creatinini orina recent",                            "Uri-Creatinini orina recent",                                  "Uri-Creatinini orina recent",                                  true));
ALLOWED_PARAMETERS.set("Uri-Proteïna orina recent",                                 new ParamData("Uri-Proteïna orina recent",                              "Uri-Proteïna orina recent",                                    "Uri-Proteïna orina recent",                                    true));
ALLOWED_PARAMETERS.set("Uri-Proteïna / creatinina; quocient",                       new ParamData("Uri-Proteïna / creatinina; quocient",                    "Uri-Proteïna / creatinina; quocient",                          "Uri-Proteïna / creatinina; quocient",                          true));
ALLOWED_PARAMETERS.set("Uri-Albúmina orina recent",                                 new ParamData("Uri-Albúmina orina recent",                              "Uri-Albúmina orina recent",                                    "Uri-Albúmina orina recent",                                    true));
ALLOWED_PARAMETERS.set("Uri-Albúmina / Creatinini orina recent",                    new ParamData("Uri-Albúmina / Creatinini orina recent",                 "Uri-Albúmina / Creatinini orina recent",                       "Uri-Albúmina / Creatinini orina recent",                       true));
ALLOWED_PARAMETERS.set("Hematies",                                                  new ParamData("Hematies",                                               "Hematies",                                                     "Hematies",                                                     true));
ALLOWED_PARAMETERS.set("Hemoglobina corpuscular mitja (HCM)",                       new ParamData("Hemoglobina corpuscular mitja (HCM)",                    "Hemoglobina corpuscular mitja (HCM)",                          "Hemoglobina corpuscular mitja (HCM)",                          true));
ALLOWED_PARAMETERS.set("Hematòcrit",                                                new ParamData("Hematòcrit",                                             "Hematòcrit",                                                   "Hematòcrit",                                                   true));
ALLOWED_PARAMETERS.set("Volum corpuscular mig (VCM)",                               new ParamData("Volum corpuscular mig (VCM)",                            "Volum corpuscular mig (VCM)",                                  "Volum corpuscular mig (VCM)",                                  true));
ALLOWED_PARAMETERS.set("Concentració HGB Corpuscular mitja",                        new ParamData("Concentració HGB Corpuscular mitja",                     "Concentració HGB Corpuscular mitja",                           "Concentració HGB Corpuscular mitja",                           true));
ALLOWED_PARAMETERS.set("Ample Distribució Eritrocits (ADE)",                        new ParamData("Ample Distribució Eritrocits (ADE)",                     "Ample Distribució Eritrocits (ADE)",                           "Ample Distribució Eritrocits (ADE)",                           true));
ALLOWED_PARAMETERS.set("San-Eritroblastes, f",                                      new ParamData("San-Eritroblastes, f",                                   "San-Eritroblastes, f",                                         "San-Eritroblastes, f",                                         true));
ALLOWED_PARAMETERS.set("San-Eritroblastes, c",                                      new ParamData("San-Eritroblastes, c",                                   "San-Eritroblastes, c",                                         "San-Eritroblastes, c",                                         true));
ALLOWED_PARAMETERS.set("Leucòcits",                                                 new ParamData("Leucòcits",                                              "Leucòcits",                                                    "Leucòcits",                                                    true));
ALLOWED_PARAMETERS.set("Neutròfils %",                                              new ParamData("Neutròfils %",                                           "Neutròfils %",                                                 "Neutròfils %",                                                 true));
ALLOWED_PARAMETERS.set("Limfòcits %",                                               new ParamData("Limfòcits %",                                            "Limfòcits %",                                                  "Limfòcits %",                                                  true));
ALLOWED_PARAMETERS.set("Monòcits %",                                                new ParamData("Monòcits %",                                             "Monòcits %",                                                   "Monòcits %",                                                   true));
ALLOWED_PARAMETERS.set("Eosinòfils %",                                              new ParamData("Eosinòfils %",                                           "Eosinòfils %",                                                 "Eosinòfils %",                                                 true));
ALLOWED_PARAMETERS.set("Basòfils %",                                                new ParamData("Basòfils %",                                             "Basòfils %",                                                   "Basòfils %",                                                   true));
ALLOWED_PARAMETERS.set("Neutròfils",                                                new ParamData("Neutròfils",                                             "Neutròfils",                                                   "Neutròfils",                                                   true));
ALLOWED_PARAMETERS.set("Limfòcits",                                                 new ParamData("Limfòcits",                                              "Limfòcits",                                                    "Limfòcits",                                                    true));
ALLOWED_PARAMETERS.set("Monòcits",                                                  new ParamData("Monòcits",                                               "Monòcits",                                                     "Monòcits",                                                     true));
ALLOWED_PARAMETERS.set("Eosinòfils",                                                new ParamData("Eosinòfils",                                             "Eosinòfils",                                                   "Eosinòfils",                                                   true));
ALLOWED_PARAMETERS.set("Basòfils",                                                  new ParamData("Basòfils",                                               "Basòfils",                                                     "Basòfils",                                                     true));
ALLOWED_PARAMETERS.set("Plaquetes",                                                 new ParamData("Plaquetes",                                              "Plaquetes",                                                    "Plaquetes",                                                    true));
ALLOWED_PARAMETERS.set("Volum plaquetari mig",                                      new ParamData("Volum plaquetari mig",                                   "Volum plaquetari mig",                                         "Volum plaquetari mig",                                         true));
ALLOWED_PARAMETERS.set("Pla-Temps de Protrombina (ràtio)",                          new ParamData("Pla-Temps de Protrombina (ràtio)",                       "Pla-Temps de Protrombina (ràtio)",                             "Pla-Temps de Protrombina (ràtio)",                             true));
ALLOWED_PARAMETERS.set("Pla-Temps de Protrombina (%)",                              new ParamData("Pla-Temps de Protrombina (%)",                           "Pla-Temps de Protrombina (%)",                                 "Pla-Temps de Protrombina (%)",                                 true));
ALLOWED_PARAMETERS.set("Pla-Temps de Protrombina (INR)",                            new ParamData("Pla-Temps de Protrombina (INR)",                         "Pla-Temps de Protrombina (INR)",                               "Pla-Temps de Protrombina (INR)",                               true));
ALLOWED_PARAMETERS.set("Pla-Temps de Protrombina (s)",                              new ParamData("Pla-Temps de Protrombina (s)",                           "Pla-Temps de Protrombina (s)",                                 "Pla-Temps de Protrombina (s)",                                 true));
ALLOWED_PARAMETERS.set("Pla-TTPA (ràtio)",                                          new ParamData("Pla-TTPA (ràtio)",                                       "Pla-TTPA (ràtio)",                                             "Pla-TTPA (ràtio)",                                             true));
ALLOWED_PARAMETERS.set("Pla-TTPA (s)",                                              new ParamData("Pla-TTPA (s)",                                           "Pla-TTPA (s)",                                                 "Pla-TTPA (s)",                                                 true));
ALLOWED_PARAMETERS.set("Pla-Fibrinogen derivat",                                    new ParamData("Pla-Fibrinogen derivat",                                 "Pla-Fibrinogen derivat",                                       "Pla-Fibrinogen derivat",                                       true));
ALLOWED_PARAMETERS.set("Srm-Glucosa",                                               new ParamData("Srm-Glucosa",                                            "Srm-Glucosa",                                                  "Srm-Glucosa",                                                  true));
ALLOWED_PARAMETERS.set("Srm-Urea",                                                  new ParamData("Srm-Urea",                                               "Srm-Urea",                                                     "Srm-Urea",                                                     true));
ALLOWED_PARAMETERS.set("Srm-Creatinini",                                            new ParamData("Srm-Creatinini",                                         "Srm-Creatinini",                                               "Srm-Creatinini",                                               true));
ALLOWED_PARAMETERS.set("Pac-Filtrat glomerular (estimació segons CKD-EPI)",         new ParamData("Pac-Filtrat glomerular (estimació segons CKD-EPI)",      "Pac-Filtrat glomerular (estimació segons CKD-EPI)",            "Pac-Filtrat glomerular (estimació segons CKD-EPI)",            true));
ALLOWED_PARAMETERS.set("Srm-Urat",                                                  new ParamData("Srm-Urat",                                               "Srm-Urat",                                                     "Srm-Urat",                                                     true));
ALLOWED_PARAMETERS.set("Srm-Bilirubina esterificada",                               new ParamData("Srm-Bilirubina esterificada",                            "Srm-Bilirubina esterificada",                                  "Srm-Bilirubina esterificada",                                  true));
ALLOWED_PARAMETERS.set("Srm-Bilirubina",                                            new ParamData("Srm-Bilirubina",                                         "Srm-Bilirubina",                                               "Srm-Bilirubina",                                               true));
ALLOWED_PARAMETERS.set("Srm-Ió sodi",                                               new ParamData("Srm-Ió sodi",                                            "Srm-Ió sodi",                                                  "Srm-Ió sodi",                                                  true));
ALLOWED_PARAMETERS.set("Srm-Ió potassi",                                            new ParamData("Srm-Ió potassi",                                         "Srm-Ió potassi",                                               "Srm-Ió potassi",                                               true));
ALLOWED_PARAMETERS.set("Srm-Fosfatasa alcalina",                                    new ParamData("Srm-Fosfatasa alcalina",                                 "Srm-Fosfatasa alcalina",                                       "Srm-Fosfatasa alcalina",                                       true));
ALLOWED_PARAMETERS.set("Srm-Fosfat",                                                new ParamData("Srm-Fosfat",                                             "Srm-Fosfat",                                                   "Srm-Fosfat",                                                   true));
ALLOWED_PARAMETERS.set("Srm-Calci",                                                 new ParamData("Srm-Calci",                                              "Srm-Calci",                                                    "Srm-Calci",                                                    true));
ALLOWED_PARAMETERS.set("vSan-Ió calci (II)",                                        new ParamData("vSan-Ió calci (II)",                                     "vSan-Ió calci (II)",                                           "vSan-Ió calci (II)",                                           true));
ALLOWED_PARAMETERS.set("Calci iònic-Sang venosa pH=7.40 (37ºC)",                    new ParamData("Calci iònic-Sang venosa pH=7.40 (37ºC)",                 "Calci iònic-Sang venosa pH=7.40 (37ºC)",                       "Calci iònic-Sang venosa pH=7.40 (37ºC)",                       true));
ALLOWED_PARAMETERS.set("vSan-Plasma; pH",                                           new ParamData("vSan-Plasma; pH",                                        "vSan-Plasma; pH",                                              "vSan-Plasma; pH",                                              true));
ALLOWED_PARAMETERS.set("vSan-Diòxid de carboni (lliure); tensió",                   new ParamData("vSan-Diòxid de carboni (lliure); tensió",                "vSan-Diòxid de carboni (lliure); tensió",                      "vSan-Diòxid de carboni (lliure); tensió",                      true));
ALLOWED_PARAMETERS.set("vSan-Oxigen; tensió",                                       new ParamData("vSan-Oxigen; tensió",                                    "vSan-Oxigen; tensió",                                          "vSan-Oxigen; tensió",                                          true));
ALLOWED_PARAMETERS.set("vSan-Hidrogencarbonat; c.subst.(actual)",                   new ParamData("vSan-Hidrogencarbonat; c.subst.(actual)",                "vSan-Hidrogencarbonat; c.subst.(actual)",                      "vSan-Hidrogencarbonat; c.subst.(actual)",                      true));
ALLOWED_PARAMETERS.set("vSan-Diòxid de carboni (total); c.subst",                   new ParamData("vSan-Diòxid de carboni (total); c.subst",                "vSan-Diòxid de carboni (total); c.subst",                      "vSan-Diòxid de carboni (total); c.subst",                      true));
ALLOWED_PARAMETERS.set("vSan-Excés de base(llocs enllaçants d'H+); c.subst.",       new ParamData("vSan-Excés de base(llocs enllaçants d'H+); c.subst.",    "vSan-Excés de base(llocs enllaçants d'H+); c.subst.",          "vSan-Excés de base(llocs enllaçants d'H+); c.subst.",          true));
ALLOWED_PARAMETERS.set("vSan-Hidrogencarbonat; c.subst.(estandar)",                 new ParamData("vSan-Hidrogencarbonat; c.subst.(estandar)",              "vSan-Hidrogencarbonat; c.subst.(estandar)",                    "vSan-Hidrogencarbonat; c.subst.(estandar)",                    true));
ALLOWED_PARAMETERS.set("Hb(vSan)-Oxigen; fr.sat. .",                                new ParamData("Hb(vSan)-Oxigen; fr.sat. .",                             "Hb(vSan)-Oxigen; fr.sat. .",                                   "Hb(vSan)-Oxigen; fr.sat. .",                                   true));
ALLOWED_PARAMETERS.set("Srm-Aspartat-aminotransferasa",                             new ParamData("Srm-Aspartat-aminotransferasa",                          "Srm-Aspartat-aminotransferasa",                                "Srm-Aspartat-aminotransferasa",                                true));
ALLOWED_PARAMETERS.set("Srm-Alanina-aminotransferasa",                              new ParamData("Srm-Alanina-aminotransferasa",                           "Srm-Alanina-aminotransferasa",                                 "Srm-Alanina-aminotransferasa",                                 true));
ALLOWED_PARAMETERS.set("Srm-Gamma-glutamiltransferasa",                             new ParamData("Srm-Gamma-glutamiltransferasa",                          "Srm-Gamma-glutamiltransferasa",                                "Srm-Gamma-glutamiltransferasa",                                true));
ALLOWED_PARAMETERS.set("Srm-Colesterol",                                            new ParamData("Srm-Colesterol",                                         "Srm-Colesterol",                                               "Srm-Colesterol",                                               true));
ALLOWED_PARAMETERS.set("Srm-Triglicèrid",                                           new ParamData("Srm-Triglicèrid",                                        "Srm-Triglicèrid",                                              "Srm-Triglicèrid",                                              true));
ALLOWED_PARAMETERS.set("Srm-Proteïna",                                              new ParamData("Srm-Proteïna",                                           "Srm-Proteïna",                                                 "Srm-Proteïna",                                                 true));
ALLOWED_PARAMETERS.set("Srm-Albúmina",                                              new ParamData("Srm-Albúmina",                                           "Srm-Albúmina",                                                 "Srm-Albúmina",                                                 true));
ALLOWED_PARAMETERS.set("Càrrega viral Citomegalovirus (PCR temps real)",            new ParamData("Càrrega viral Citomegalovirus (PCR temps real)",         "Càrrega viral Citomegalovirus (PCR temps real)",               "Càrrega viral Citomegalovirus (PCR temps real)",               true));


var QUALITATIVE_PARAMETERS = new Map();

////////////////                ID                                                  ////        ID                                                      ////     CAT                                                   /////   ES
QUALITATIVE_PARAMETERS.set("Uri-Eritròcits dismòrfics",                             new ParamData("Uri-Eritròcits dismòrfics",                          "Uri-Eritròcits dismòrfics",                                    "Uri-Eritròcits dismòrfics",                                    true));
QUALITATIVE_PARAMETERS.set("Uri-Llevats",                                           new ParamData("Uri-Llevats",                                        "Uri-Llevats",                                                  "Uri-Llevats",                                                  true));
QUALITATIVE_PARAMETERS.set("Càrrega viral Citomegalovirus (PCR temps real)",        new ParamData("Càrrega viral Citomegalovirus (PCR temps real)",     "Càrrega viral Citomegalovirus (PCR temps real)",               "Càrrega viral Citomegalovirus (PCR temps real)",               true));




var PARAMETER_SEPARATORS = [
    "blanc".normalize(),
    "b b".normalize()
    // "\n".normalize()
];

var PARAMETER_IGNORE = [
    "."
];

var PARAMETER_TRIM = [
    " .",
    "¯ "
];

var EOF = [
    "b b b".normalize()
];

var ALLOWED_PARAMETER_UNITS = [
    "cel/μL".normalize(),
    "cil/μL".normalize(),
    "bact/μL".normalize(),
    "mg/dL".normalize(),
    "mg/g".normalize(),
    "mg/L".normalize(),
    "x10E12/L".normalize(),
    "g/dL".normalize(),
    "%".normalize(),
    "fL".normalize(),
    "pg".normalize(),
    "x10E9/L".normalize(),
    "10E9/L".normalize(),
    "ràtio".normalize(),
    "seg".normalize(),
    "g/L".normalize(),
    "ml/min/1,73 m2".normalize(),
    "mmol/L".normalize(),
    "mm Hg".normalize(),
    "UI/L".normalize()
];



var PARSED_DATA = null;

function process()
{
    
    var input = document.getElementById("input");
    

    var inputText = input.value.normalize();

    var splitted = inputText.split("\n");
    

    var currentSection = null;
    var processedSections = [];



    for(var i = 0; i < splitted.length; ++i)
    {
        var line = splitted[i].normalize();
        // if(!isEndOfFile(line))
        // {
            if(isLineASection(line))
            {
                if(currentSection==null)
                {
                    currentSection = new Section(line, []);
                }
                else
                {
                    processedSections.push(currentSection);
                    currentSection = new Section(line, []);
                }
            }
            else if(isLineAParameter(line))
            {
                var parameter = new Parameter("", "", "", true);
                var indexToJump = parameter.InitializeDataFromLine(line, splitted, i)

                //creating a parameter will read the necesary lines, so it will need to jump to a new line.
                i += indexToJump;

                currentSection.parameters.push(parameter);
            }
        // }
        // else
        // {
        //     EOFProcessed = true;
        //     processedSections.push(currentSection);
        // }
    }

    // if(!EOFProcessed)
    processedSections.push(currentSection);

    PARSED_DATA = processedSections;

    
    BuildOutput();

    BuildFilterSection();

}


function filterChange(object)
{
    // console.log(object.id + " /// " + object.checked);
    loop:
    for(var i = 0; i < PARSED_DATA.length; ++i)
    {
        var section = PARSED_DATA[i];
        
        for(var j = 0; j < section.parameters.length; ++j)
        {
            var param = section.parameters[j];
            
            if(param.name === object.id)
            {
                // console.log("Found");
                param.show = object.checked;
                break loop;
            }
        }
    }
    
    // var value = object.checked;
    // object.checked = !value;
    BuildOutput();
    // BuildFilterSection();
}


function BuildFilterSection()
{
    //Build the filter HTML

    var filterDiv = document.getElementById("FilterSection");

    var innerHTML = "";

    for(var i = 0; i < PARSED_DATA.length; ++i)
    {
        innerHTML += PARSED_DATA[i].getHTML();
    }

    filterDiv.innerHTML = innerHTML;
}

function BuildOutput()
{
    //Build final text
    var output = document.getElementById("output");
    output.value = getProcessedText(PARSED_DATA);
}


function getProcessedText(sectionArray)
{
    var result = "";

    for(var i = 0; i < sectionArray.length; ++i)
    {
        result += sectionArray[i].toString()
    }

    return result;
}

function concatStringArray(array)
{
    var result = "";
    array.forEach(element => {
        result += " " + element;
    });

    return result;
}

function isEndOfFile(line)
{
   return arrayElementIncludedInString(EOF, line);
}

function isLineASection(line)
{
    var normLine = line.normalize();

    if(ALLOWED_SECTIONS.has(normLine))
    {
        return true;
    }
    else
    {
        
        for(const [id, data] of ALLOWED_SECTIONS.entries())
        {
            if(normLine.includes(id))
            return true;
        }
    }

    return false;
}

function isLineAParameter(line)
{
    // var normLine = line.normalize();
    // if(ALLOWED_PARAMETERS.includes(normLine))
    // {
    //     return true;
    // }
    // else
    // {
    //     return arrayElementIncludedInString(ALLOWED_PARAMETERS, normLine);
    // }

    var normLine = line.normalize();

    if(ALLOWED_PARAMETERS.has(normLine))
    {
        return true;
    }
    else
    {

        for(const [id, data] of ALLOWED_PARAMETERS.entries())
        {
            if(normLine.includes(id))
            return true;
        }
    }

    return false;
}

function isLineAParameterSeparator(line)
{
    var normLine = line.normalize();
    if(PARAMETER_SEPARATORS.includes(normLine))
    {
        return true;
    }
    else
    {
        return arrayElementIncludedInString(PARAMETER_SEPARATORS, normLine);
    }
}


function arrayElementIncludedInString(array, string)
{   
    for(var i = 0; i < array.length; ++i)
    {
        var element = array[i];

        if(string.includes(element))
            return true;
    }

    return false;
}


class Parameter
{
    constructor(name, value, unit, show, data = null)
    {
        this.name = name;
        this.value = value;
        this.unit = unit;
        this.show = show;
        this.isValid = true;
        this.hasName = true;
        this.hasValue = true;
        this.hasUnit = true;
        this.data = data;
    }

    InitializeDataFromLine(line, array, index)
    {
        //empty initialization
        this.name = "";
        this.value ="";
        this.unit = "";
        this.isValid = false;
        this.hasName = false;
        this.hasValue = false;
        this.hasUnit = false;


        //read all the following lines until it finds a parameter separator.
        //concat the result lines

        var parameterLines = [];
        var lastIndex = -1;

        for(var i = index; i < array.length; ++i)
        {
            var line = array[i];
            var nextLine =  (i+1)<array.length ? array[i+1] : "";

            var isParamSeparator = isLineAParameterSeparator(line);
            var isNextParam = isLineAParameter(nextLine);
            var isNextSection = isLineASection(nextLine);

            if(!isParamSeparator)
            {
                if(!PARAMETER_IGNORE.includes(line))
                    parameterLines.push(line);
                lastIndex = i;

                if(isNextParam || isNextSection)
                    break;
            }
            else
            {
                break;
            }
        }

        //concat lines
        var result = concatStringArray(parameterLines);

        ///remove undesired substrings

        for(var i = 0; i < PARAMETER_TRIM.length; ++i)
        {
            var toRemove = PARAMETER_TRIM[i];
            result = result.replace(toRemove, "");
        }


        //extract name and remove it from processing string
        result = this.extractNameFromLine(result);

        //next find the unit. If it doesn't have units we are handling a qualitative parameter
        this.extractUnitFromLine(result);

        //get the value, either nominal or qualitative
        this.extractValueFromLine(result);

        this.show = this.data != null ? this.data.SHOW : true;

        return lastIndex - index; //return how many lines the processing has to advance
    }

    extractValueFromLine(line)
    {
        var normLine = line.normalize();

        //check if it is qualitative
        if(!this.hasUnit)
        {
            this.value = normLine; //qualitative value is whatever is written
            this.hasValue = true;
        }
        else
        {
            //if it has unit, split string by the unit. First result is the value, the rest is discarded
            var splt = normLine.split(this.unit);
            this.value = splt[0].trim();
            this.hasValue = true;
        }
    }

    extractUnitFromLine(line)
    {
        var normLine = line.normalize();

        if(ALLOWED_PARAMETER_UNITS.includes(normLine))
        {
            this.unit = ALLOWED_PARAMETER_UNITS[ALLOWED_PARAMETER_UNITS.indexOf(normLine)];
            this.hasUnit = true;

            return true;
        }
        else{

            for(var i = 0; i < ALLOWED_PARAMETER_UNITS.length; ++i)
            {
                var element = ALLOWED_PARAMETER_UNITS[i];

                if(normLine.includes(element))
                {
                    this.unit = element;
                    this.hasUnit = true;

                    return true;
                }
            }
        }

        //if we are here it means the parameter data doesn't have units. it is a qualitative parameter
        this.unit = "";
        this.hasUnit = false;

        return false;
    }

    getNameFromData()
    {
        //check the language first!

        return this.data.CAT;
    }

    extractNameFromLine(line)
    {
        var normLine = line.normalize();


        if(ALLOWED_PARAMETERS.has(normLine))
        {
            this.data = ALLOWED_PARAMETERS[normLine];
            this.name = this.getNameFromData();
            this.hasName = true;
            return normLine.replace(this.data.ID,"");
        }
        else
        {

            for(const [id, data] of ALLOWED_PARAMETERS.entries())
            {
                if(normLine.includes(id))
                {
                    this.data = data;
                    this.name = this.getNameFromData();
                    this.hasName = true;
                    return normLine.replace(id, "");
                }
            }
        }

        this.data = null;
        this.name = "";
        this.hasName = false;
        return normLine;
    }

    toString()
    {
        return this.name + " " + this.value + " " + this.unit+"; "; 
    }

    getHTML()
    {   
        var checked = this.show ? "checked" : "";
        return "<input type='checkbox' id='"+this.name+"' onchange='filterChange(this)' "+checked+"><label for='"+this.name+"'>"+this.name+"</label><br>";
    }

}

class Section
{
    constructor(name, parameters)
    {
        this.name = name;
        this.parameters = parameters;
    }

    InitializeDataFromLine(line)
    {
        this.name = this.extractNameFromLine(line);
        this.parameters = [];
    }

    toString()
    {
        var result = "";//"\n";
        var show = false;

        result = this.name.toUpperCase() + ": ";

        for(var i  = 0; i < this.parameters.length; ++i)
        {
            var param = this.parameters[i];

            show = show || param.show;
            
            if(param.show)
                result += " " + param.toString();
        }

        result += "\n";

        return show? result : "";
    }

    getHTML()
    {
        var result = "<h2 id='"+this.name+"'>'"+this.name+"'</h2>";


        for(var i=0; i<this.parameters.length; ++i)
        {
            result += this.parameters[i].getHTML();
        }

        return result;
    }

    extractNameFromLine(line)
    {
        var normLine = line.normalize();
        if(ALLOWED_SECTIONS.includes(normLine))
        {
            return normLine;
        }
        else
        {
            for(var i = 0; i < ALLOWED_SECTIONS.length; ++i)
            {
                var element = ALLOWED_SECTIONS[i];
                if(normLine.includes(element))
                {
                    return element;
                }
            }

            return "NOT VALID"
        }
    }
}