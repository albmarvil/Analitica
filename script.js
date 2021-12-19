///// TODO 

///MOVE DATA TO STANDALONE FILE

///PROTEINOGRAMA

///SECTION AND SUBSECTIONS
// Show sections and cehckbox

//ONLY ONE SECTION (Original analisis)

/////TODOEND

// import 'data.js'

const ES = 0;
const CAT = 1;

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
////////////////           ID                                             //// ID                           ////     CAT                        /////   ES
ALLOWED_SECTIONS.set("ESTUDI ELEMENTS FORMES",          new ParamData("ESTUDI ELEMENTS FORMES",             "ESTUDI ELEMENTS FORMES",           "ESTUDIO ELEMENTOS DE ORINA",           true));
ALLOWED_SECTIONS.set("ESTUDI BACTERIOLÒGIC",            new ParamData("ESTUDI BACTERIOLÒGIC",               "ESTUDI BACTERIOLÒGIC",             "ESTUDIO BACTERIOLÓGICO",               true));
ALLOWED_SECTIONS.set("SUBSTRATS",                       new ParamData("SUBSTRATS",                          "SUBSTRATS",                        "SUBSTRATOS",                           true));
ALLOWED_SECTIONS.set("HEMOGRAMA",                       new ParamData("HEMOGRAMA",                          "HEMOGRAMA",                        "HEMOGRAMA",                            true));
ALLOWED_SECTIONS.set("HEMOSTÀSIA BÀSICA I D'URGÈNCIES", new ParamData("HEMOSTÀSIA BÀSICA I D'URGÈNCIES",    "HEMOSTÀSIA BÀSICA I D'URGÈNCIES",  "HEMOSTÁSIA",                           true));
ALLOWED_SECTIONS.set("IONS",                            new ParamData("IONS",                               "IONS",                             "IONES",                                true));
ALLOWED_SECTIONS.set("GASOS EN SANG",                   new ParamData("GASOS EN SANG",                      "GASOS EN SANG",                    "GASES",                                true));
ALLOWED_SECTIONS.set("ENZIMS",                          new ParamData("ENZIMS",                             "ENZIMS",                           "ENZIMAS",                              true));
ALLOWED_SECTIONS.set("LIPIDS i LIPOPROTEÏNES",          new ParamData("LIPIDS i LIPOPROTEÏNES",             "LIPIDS i LIPOPROTEÏNES",           "PERFIL LIPIDICO",                      true));
ALLOWED_SECTIONS.set("ESTUDI VIROLÒGIC",                new ParamData("ESTUDI VIROLÒGIC",                   "ESTUDI VIROLÒGIC",                 "ESTUDIO VIROLÓGICO",                   true));
ALLOWED_SECTIONS.set("PROTEÏNES",                       new ParamData("PROTEÏNES",                          "PROTEÏNES",                        "PROTEÍNAS",                            true));
ALLOWED_SECTIONS.set("PROVES DERIVADES",                new ParamData("PROVES DERIVADES",                   "PROVES DERIVADES",                 "PRUEBAS DERIVADAS",                    true));
ALLOWED_SECTIONS.set("ALTRES DETERMINACIONS",           new ParamData("ALTRES DETERMINACIONS",              "ALTRES DETERMINACIONS",            "OTRAS DETERMINACIONES",                true));
ALLOWED_SECTIONS.set("MARCADORS TUMORALS",              new ParamData("MARCADORS TUMORALS",                 "MARCADORS TUMORALS",               "MARCADORES TUMORALES",                 true));
ALLOWED_SECTIONS.set("Immunoglobulines",                new ParamData("Immunoglobulines",                   "IMMUNOGLOBULINES",                 "IMMUNOGLOBULINAS",                     true));
ALLOWED_SECTIONS.set("Estudi Gammapatia Monoclonal",    new ParamData("Estudi Gammapatia Monoclonal",       "ESTUDI GAMMAPATIA MONOCLONAL",     "ESTUDIO GAMMAPATIA MONOCLONAL",        true));


var ALLOWED_PARAMETERS = new Map();

////////////////           ID                                                       //////      ID                                                           ////     CAT                                                    /////   ES
ALLOWED_PARAMETERS.set("Uri-Leucòcits",                                             new ParamData("Uri-Leucòcits",                                          "Uri-Leucòcits",                                                "Leucos",                       true));
ALLOWED_PARAMETERS.set("Uri-Eritròcits dismòrfics",                                 new ParamData("Uri-Eritròcits dismòrfics",                              "Uri-Eritròcits dismòrfics",                                    "Eritrocitos dismórficos",      true));
ALLOWED_PARAMETERS.set("Uri-Eritròcits",                                            new ParamData("Uri-Eritròcits",                                         "Uri-Eritròcits",                                               "Eritrocitos",                  true));
ALLOWED_PARAMETERS.set("Uri-Cèl·lules epitelials",                                  new ParamData("Uri-Cèl·lules epitelials",                               "Uri-Cèl·lules epitelials",                                     "Cél. epiteliales",             true));
ALLOWED_PARAMETERS.set("Uri-Cilindres hialins",                                     new ParamData("Uri-Cilindres hialins",                                  "Uri-Cilindres hialins",                                        "Cilindros hialinos",           true));
ALLOWED_PARAMETERS.set("Uri-Bacteris",                                              new ParamData("Uri-Bacteris",                                           "Uri-Bacteris",                                                 "Bacterias",                    true));
ALLOWED_PARAMETERS.set("Uri-Llevats",                                               new ParamData("Uri-Llevats",                                            "Uri-Llevats",                                                  "Levaduras",                    true));
ALLOWED_PARAMETERS.set("Uri-Creatinini orina recent",                               new ParamData("Uri-Creatinini orina recent",                            "Uri-Creatinini orina recent",                                  "CrU",                          true));
ALLOWED_PARAMETERS.set("Uri-Proteïna orina recent",                                 new ParamData("Uri-Proteïna orina recent",                              "Uri-Proteïna orina recent",                                    "Proteína (O)",                 false));
ALLOWED_PARAMETERS.set("Uri-Proteïna / creatinina; quocient",                       new ParamData("Uri-Proteïna / creatinina; quocient",                    "Uri-Proteïna / creatinina; quocient",                          "Prot/CrU",                     true));
ALLOWED_PARAMETERS.set("Uri-Albúmina orina recent",                                 new ParamData("Uri-Albúmina orina recent",                              "Uri-Albúmina orina recent",                                    "Albúmina (O)",                 false));
ALLOWED_PARAMETERS.set("Uri-Albúmina / Creatinini orina recent",                    new ParamData("Uri-Albúmina / Creatinini orina recent",                 "Uri-Albúmina / Creatinini orina recent",                       "Alb/CrU",                      true));
ALLOWED_PARAMETERS.set("Comentari sediment:",                                       new ParamData("Comentari sediment:",                                    "Comentari sediment:",                                          "Sedimento:",                   true));
ALLOWED_PARAMETERS.set("Hematies",                                                  new ParamData("Hematies",                                               "Hematies",                                                     "Hematies",                     false));
ALLOWED_PARAMETERS.set("Hemoglobina corpuscular mitja (HCM)",                       new ParamData("Hemoglobina corpuscular mitja (HCM)",                    "Hemoglobina corpuscular mitja (HCM)",                          "HCM",                          true));
ALLOWED_PARAMETERS.set("Hemoglobina",                                               new ParamData("Hemoglobina",                                            "Hemoglobina",                                                  "Hb",                           true));
ALLOWED_PARAMETERS.set("Hematòcrit",                                                new ParamData("Hematòcrit",                                             "Hematòcrit",                                                   "Hto",                          true));
ALLOWED_PARAMETERS.set("Volum corpuscular mig (VCM)",                               new ParamData("Volum corpuscular mig (VCM)",                            "Volum corpuscular mig (VCM)",                                  "VCM",                          true));
ALLOWED_PARAMETERS.set("Concentració HGB Corpuscular mitja",                        new ParamData("Concentració HGB Corpuscular mitja",                     "Concentració HGB Corpuscular mitja",                           "CHCM",                         false));
ALLOWED_PARAMETERS.set("Ample Distribució Eritrocits (ADE)",                        new ParamData("Ample Distribució Eritrocits (ADE)",                     "Ample Distribució Eritrocits (ADE)",                           "ADE",                          true));
ALLOWED_PARAMETERS.set("San-Eritroblastes, f",                                      new ParamData("San-Eritroblastes, f",                                   "San-Eritroblastes, f",                                         "Eritroblastos, f",             false));
ALLOWED_PARAMETERS.set("San-Eritroblastes, c",                                      new ParamData("San-Eritroblastes, c",                                   "San-Eritroblastes, c",                                         "Eritroblastos, c",             false));
ALLOWED_PARAMETERS.set("Leucòcits",                                                 new ParamData("Leucòcits",                                              "Leucòcits",                                                    "Leucocitos",                   true));
ALLOWED_PARAMETERS.set("Neutròfils %",                                              new ParamData("Neutròfils %",                                           "Neutròfils %",                                                 "N %",                          false));
ALLOWED_PARAMETERS.set("Limfòcits %",                                               new ParamData("Limfòcits %",                                            "Limfòcits %",                                                  "L %",                          false));
ALLOWED_PARAMETERS.set("Monòcits %",                                                new ParamData("Monòcits %",                                             "Monòcits %",                                                   "M %",                          false));
ALLOWED_PARAMETERS.set("Eosinòfils %",                                              new ParamData("Eosinòfils %",                                           "Eosinòfils %",                                                 "Eo %",                         false));
ALLOWED_PARAMETERS.set("Basòfils %",                                                new ParamData("Basòfils %",                                             "Basòfils %",                                                   "B %",                          false));
ALLOWED_PARAMETERS.set("Neutròfils",                                                new ParamData("Neutròfils",                                             "Neutròfils",                                                   "N",                            true));
ALLOWED_PARAMETERS.set("Limfòcits",                                                 new ParamData("Limfòcits",                                              "Limfòcits",                                                    "L",                            true));
ALLOWED_PARAMETERS.set("Monòcits",                                                  new ParamData("Monòcits",                                               "Monòcits",                                                     "M",                            true));
ALLOWED_PARAMETERS.set("Eosinòfils",                                                new ParamData("Eosinòfils",                                             "Eosinòfils",                                                   "Eo",                           true));
ALLOWED_PARAMETERS.set("Basòfils",                                                  new ParamData("Basòfils",                                               "Basòfils",                                                     "B",                            true));
ALLOWED_PARAMETERS.set("Plaquetes",                                                 new ParamData("Plaquetes",                                              "Plaquetes",                                                    "Plaquetas",                    true));
ALLOWED_PARAMETERS.set("Volum plaquetari mig",                                      new ParamData("Volum plaquetari mig",                                   "Volum plaquetari mig",                                         "VPM",                          false));
ALLOWED_PARAMETERS.set("Pla-Temps de Protrombina (ràtio)",                          new ParamData("Pla-Temps de Protrombina (ràtio)",                       "Pla-Temps de Protrombina (ràtio)",                             "TP",                           false));
ALLOWED_PARAMETERS.set("Pla-Temps de Protrombina (%)",                              new ParamData("Pla-Temps de Protrombina (%)",                           "Pla-Temps de Protrombina (%)",                                 "TP (%)",                       false));
ALLOWED_PARAMETERS.set("Pla-Temps de Protrombina (INR)",                            new ParamData("Pla-Temps de Protrombina (INR)",                         "Pla-Temps de Protrombina (INR)",                               "INR",                          true));
ALLOWED_PARAMETERS.set("Pla-Temps de Protrombina (s)",                              new ParamData("Pla-Temps de Protrombina (s)",                           "Pla-Temps de Protrombina (s)",                                 "TP (s)",                       true));
ALLOWED_PARAMETERS.set("Pla-TTPA (ràtio)",                                          new ParamData("Pla-TTPA (ràtio)",                                       "Pla-TTPA (ràtio)",                                             "TTPA",                         false));
ALLOWED_PARAMETERS.set("Pla-TTPA (s)",                                              new ParamData("Pla-TTPA (s)",                                           "Pla-TTPA (s)",                                                 "TTPA (s)",                     true));
ALLOWED_PARAMETERS.set("Pla-Fibrinogen derivat",                                    new ParamData("Pla-Fibrinogen derivat",                                 "Pla-Fibrinogen derivat",                                       "Fibrinogeno",                  true));
ALLOWED_PARAMETERS.set("Srm-Glucosa",                                               new ParamData("Srm-Glucosa",                                            "Srm-Glucosa",                                                  "Glucosa",                      true));
ALLOWED_PARAMETERS.set("Srm-Urea",                                                  new ParamData("Srm-Urea",                                               "Srm-Urea",                                                     "Urea",                         true));
ALLOWED_PARAMETERS.set("Srm-Creatinini",                                            new ParamData("Srm-Creatinini",                                         "Srm-Creatinini",                                               "CrS",                          true));
ALLOWED_PARAMETERS.set("Pac-Filtrat glomerular (estimació segons CKD-EPI)",         new ParamData("Pac-Filtrat glomerular (estimació segons CKD-EPI)",      "Pac-Filtrat glomerular (estimació segons CKD-EPI)",            "FG",                           true));
ALLOWED_PARAMETERS.set("Srm-Urat",                                                  new ParamData("Srm-Urat",                                               "Srm-Urat",                                                     "Urato",                        true));
ALLOWED_PARAMETERS.set("Srm-Bilirubina esterificada",                               new ParamData("Srm-Bilirubina esterificada",                            "Srm-Bilirubina esterificada",                                  "Bili esterificada",            true));
ALLOWED_PARAMETERS.set("Srm-Bilirubina",                                            new ParamData("Srm-Bilirubina",                                         "Srm-Bilirubina",                                               "Bili total",                   true));
ALLOWED_PARAMETERS.set("Srm-Ió sodi",                                               new ParamData("Srm-Ió sodi",                                            "Srm-Ió sodi",                                                  "Na",                           true));
ALLOWED_PARAMETERS.set("Srm-Ió potassi",                                            new ParamData("Srm-Ió potassi",                                         "Srm-Ió potassi",                                               "K",                            true));
ALLOWED_PARAMETERS.set("Srm-Fosfatasa alcalina",                                    new ParamData("Srm-Fosfatasa alcalina",                                 "Srm-Fosfatasa alcalina",                                       "FA",                           true));
ALLOWED_PARAMETERS.set("Srm-Fosfat",                                                new ParamData("Srm-Fosfat",                                             "Srm-Fosfat",                                                   "PO4",                          true));
ALLOWED_PARAMETERS.set("Srm-Calci",                                                 new ParamData("Srm-Calci",                                              "Srm-Calci",                                                    "Ca",                           true));
ALLOWED_PARAMETERS.set("Srm-Clorur",                                                new ParamData("Srm-Clorur",                                             "Srm-Clorur",                                                   "Cl",                           true));
ALLOWED_PARAMETERS.set("vSan-Ió calci (II)",                                        new ParamData("vSan-Ió calci (II)",                                     "vSan-Ió calci (II)",                                           "Ca (i)",                       true));
ALLOWED_PARAMETERS.set("Calci iònic-Sang venosa pH=7.40 (37ºC)",                    new ParamData("Calci iònic-Sang venosa pH=7.40 (37ºC)",                 "Calci iònic-Sang venosa pH=7.40 (37ºC)",                       "Ca (i) pH=7.40",               false));
ALLOWED_PARAMETERS.set("vSan-Plasma; pH",                                           new ParamData("vSan-Plasma; pH",                                        "vSan-Plasma; pH",                                              "pH",                           true));
ALLOWED_PARAMETERS.set("vSan-Diòxid de carboni (lliure); tensió",                   new ParamData("vSan-Diòxid de carboni (lliure); tensió",                "vSan-Diòxid de carboni (lliure); tensió",                      "pCO2",                         true));
ALLOWED_PARAMETERS.set("vSan-Oxigen; tensió",                                       new ParamData("vSan-Oxigen; tensió",                                    "vSan-Oxigen; tensió",                                          "pO2",                          true));
ALLOWED_PARAMETERS.set("vSan-Hidrogencarbonat; c.subst.(actual)",                   new ParamData("vSan-Hidrogencarbonat; c.subst.(actual)",                "vSan-Hidrogencarbonat; c.subst.(actual)",                      "HCO3",                         false));
ALLOWED_PARAMETERS.set("vSan-Diòxid de carboni (total); c.subst",                   new ParamData("vSan-Diòxid de carboni (total); c.subst",                "vSan-Diòxid de carboni (total); c.subst",                      "CO2 (total)",                  false));
ALLOWED_PARAMETERS.set("vSan-Excés de base(llocs enllaçants d'H+); c.subst.",       new ParamData("vSan-Excés de base(llocs enllaçants d'H+); c.subst.",    "vSan-Excés de base(llocs enllaçants d'H+); c.subst.",          "EB",                           true));
ALLOWED_PARAMETERS.set("vSan-Hidrogencarbonat; c.subst.(estandar)",                 new ParamData("vSan-Hidrogencarbonat; c.subst.(estandar)",              "vSan-Hidrogencarbonat; c.subst.(estandar)",                    "HCO3 (estandar)",              true));
ALLOWED_PARAMETERS.set("Hb(vSan)-Oxigen; fr.sat. .",                                new ParamData("Hb(vSan)-Oxigen; fr.sat. .",                             "Hb(vSan)-Oxigen; fr.sat. .",                                   "Hb",                           true));
ALLOWED_PARAMETERS.set("Srm-Aspartat-aminotransferasa",                             new ParamData("Srm-Aspartat-aminotransferasa",                          "Srm-Aspartat-aminotransferasa",                                "AST",                          true));
ALLOWED_PARAMETERS.set("Srm-Alanina-aminotransferasa",                              new ParamData("Srm-Alanina-aminotransferasa",                           "Srm-Alanina-aminotransferasa",                                 "ALT",                          true));
ALLOWED_PARAMETERS.set("Srm-Gamma-glutamiltransferasa",                             new ParamData("Srm-Gamma-glutamiltransferasa",                          "Srm-Gamma-glutamiltransferasa",                                "GGT",                          true));
ALLOWED_PARAMETERS.set("Srm-Lactat-deshidrogenasa",                                 new ParamData("Srm-Lactat-deshidrogenasa",                              "Srm-Lactat-deshidrogenasa",                                    "LDH",                          true));
ALLOWED_PARAMETERS.set("Srm-Creatina-cinasa",                                       new ParamData("Srm-Creatina-cinasa",                                    "Srm-Creatina-cinasa",                                          "CK",                           true));
ALLOWED_PARAMETERS.set("Srm-Colesterol d'LDL (càlcul Friedewald)",                  new ParamData("Srm-Colesterol d'LDL (càlcul Friedewald)",               "Srm-Colesterol d'LDL (càlcul Friedewald)",                     "LDL",                          true));
ALLOWED_PARAMETERS.set("Srm-Colesterol d'HDL",                                      new ParamData("Srm-Colesterol d'HDL",                                   "Srm-Colesterol d'HDL",                                         "HDL",                          true));
ALLOWED_PARAMETERS.set("Srm-Colesterol",                                            new ParamData("Srm-Colesterol",                                         "Srm-Colesterol",                                               "Colesterol",                   true));
ALLOWED_PARAMETERS.set("Srm-Triglicèrid",                                           new ParamData("Srm-Triglicèrid",                                        "Srm-Triglicèrid",                                              "TG",                           true));
ALLOWED_PARAMETERS.set("Srm-Proteïna C reactiva",                                   new ParamData("Srm-Proteïna C reactiva",                                "Srm-Proteïna C reactiva",                                      "PCR",                          true));
ALLOWED_PARAMETERS.set("Srm-Proteïna",                                              new ParamData("Srm-Proteïna",                                           "Srm-Proteïna",                                                 "Proteína (S)",                 true));
ALLOWED_PARAMETERS.set("Srm-Albúmina",                                              new ParamData("Srm-Albúmina",                                           "Srm-Albúmina",                                                 "Albúmina (S)",                 true));
ALLOWED_PARAMETERS.set("Càrrega viral Citomegalovirus (PCR temps real)",            new ParamData("Càrrega viral Citomegalovirus (PCR temps real)",         "Càrrega viral Citomegalovirus (PCR temps real)",               "CV CMV",                       true));
ALLOWED_PARAMETERS.set("Uri-Ió sodi orina recent",                                  new ParamData("Uri-Ió sodi orina recent",                               "Uri-Ió sodi orina recent",                                     "Na (O)",                       true));
ALLOWED_PARAMETERS.set("Uri-Sodi / creatinina; quocient",                           new ParamData("Uri-Sodi / creatinina; quocient",                        "Uri-Sodi / creatinina; quocient",                              "Na/CrU",                       false));
ALLOWED_PARAMETERS.set("Uri-Ió potassi orina recent",                               new ParamData("Uri-Ió potassi orina recent",                            "Uri-Ió potassi orina recent",                                  "K (O)",                        true));
ALLOWED_PARAMETERS.set("Uri-Potassi / creatinina; quocient",                        new ParamData("Uri-Potassi / creatinina; quocient",                     "Uri-Potassi / creatinina; quocient",                           "K/CrU",                        false));
ALLOWED_PARAMETERS.set("Uri-Clorur orina recent",                                   new ParamData("Uri-Clorur orina recent",                                "Uri-Clorur orina recent",                                      "Cl (O)",                       true));
ALLOWED_PARAMETERS.set("Uri-Clorur / creatinina; quocient",                         new ParamData("Uri-Clorur / creatinina; quocient",                      "Uri-Clorur / creatinina; quocient",                            "Cl/CrU",                       false));
ALLOWED_PARAMETERS.set("Mioglobina orina RECENT",                                   new ParamData("Mioglobina orina RECENT",                                "Mioglobina orina RECENT",                                      "Mioglobina (O)",               true));
ALLOWED_PARAMETERS.set("San-Eritrosedimentació (VSG)",                              new ParamData("San-Eritrosedimentació (VSG)",                           "San-Eritrosedimentació (VSG)",                                 "VSG",                          true));
ALLOWED_PARAMETERS.set("Srm-Beta-2-microglobulina",                                 new ParamData("Srm-Beta-2-microglobulina",                              "Srm-Beta-2-microglobulina",                                    "Beta-2-microglobulina",        true));
ALLOWED_PARAMETERS.set("Srm-Immunoglobulina G",                                     new ParamData("Srm-Immunoglobulina G",                                  "Srm-Immunoglobulina G",                                        "IgG",                          true));
ALLOWED_PARAMETERS.set("Srm-Immunoglobulina A",                                     new ParamData("Srm-Immunoglobulina A",                                  "Srm-Immunoglobulina A",                                        "IgA",                          true));
ALLOWED_PARAMETERS.set("Srm-Immunoglobulina M",                                     new ParamData("Srm-Immunoglobulina M",                                  "Srm-Immunoglobulina M",                                        "IgM",                          true));
ALLOWED_PARAMETERS.set("Srm-Cadenes kappa lliures",                                 new ParamData("Srm-Cadenes kappa lliures",                              "Srm-Cadenes kappa lliures",                                    "C. kappa",                     true));
ALLOWED_PARAMETERS.set("Srm-Cadenes lambda lliures",                                new ParamData("Srm-Cadenes lambda lliures",                             "Srm-Cadenes lambda lliures",                                   "C. lambda",                    true));
ALLOWED_PARAMETERS.set("Srm-Cadenes Kappa/ cadenes lambda",                         new ParamData("Srm-Cadenes Kappa/ cadenes lambda",                      "Srm-Cadenes Kappa/ cadenes lambda",                            "Kappa/Lambda",                 true));



var QUALITATIVE_PARAMETERS = new Map();

////////////////                ID                                                  ////        ID                                                      ////     CAT                                                   /////   ES
QUALITATIVE_PARAMETERS.set("Uri-Eritròcits dismòrfics",                             new ParamData("Uri-Eritròcits dismòrfics",                          "Uri-Eritròcits dismòrfics",                                    "Eritrocitos dismórficos",          true));
QUALITATIVE_PARAMETERS.set("Uri-Llevats",                                           new ParamData("Uri-Llevats",                                        "Uri-Llevats",                                                  "Levaduras",                        true));
QUALITATIVE_PARAMETERS.set("Càrrega viral Citomegalovirus (PCR temps real)",        new ParamData("Càrrega viral Citomegalovirus (PCR temps real)",     "Càrrega viral Citomegalovirus (PCR temps real)",               "CV CMV",                           true));
QUALITATIVE_PARAMETERS.set("Comentari sediment:",                                   new ParamData("Comentari sediment:",                                "Comentari sediment:",                                          "Sedimento:",                       true));
QUALITATIVE_PARAMETERS.set("Mioglobina orina RECENT",                               new ParamData("Mioglobina orina RECENT",                             "Mioglobina orina RECENT",                                     "Mioglobina (O)",                   true));


var PARAMETER_SEPARATORS = new Set();
PARAMETER_SEPARATORS.add("blanc".normalize());
PARAMETER_SEPARATORS.add("b b".normalize());


var PARAMETER_IGNORE = new Set();
PARAMETER_IGNORE.add(".");



var PARAMETER_TRIM = new Set();
PARAMETER_TRIM.add(" . ¯");
PARAMETER_TRIM.add(" .");
PARAMETER_TRIM.add("¯ ");


var ALLOWED_PARAMETER_UNITS = new Set();
ALLOWED_PARAMETER_UNITS.add("cel/μL".normalize());
ALLOWED_PARAMETER_UNITS.add("cil/μL".normalize());
ALLOWED_PARAMETER_UNITS.add("bact/μL".normalize());
ALLOWED_PARAMETER_UNITS.add("mg/dL".normalize());
ALLOWED_PARAMETER_UNITS.add("mg/g".normalize());
ALLOWED_PARAMETER_UNITS.add("mg/L".normalize());
ALLOWED_PARAMETER_UNITS.add("x10E12/L".normalize());
ALLOWED_PARAMETER_UNITS.add("g/dL".normalize());
ALLOWED_PARAMETER_UNITS.add("%".normalize());
ALLOWED_PARAMETER_UNITS.add("fL".normalize());
ALLOWED_PARAMETER_UNITS.add("pg".normalize());
ALLOWED_PARAMETER_UNITS.add("x10E9/L".normalize());
ALLOWED_PARAMETER_UNITS.add("10E9/L".normalize());
ALLOWED_PARAMETER_UNITS.add("ràtio".normalize());
ALLOWED_PARAMETER_UNITS.add("seg".normalize());
ALLOWED_PARAMETER_UNITS.add("g/L".normalize());
ALLOWED_PARAMETER_UNITS.add("ml/min/1,73 m2".normalize());
ALLOWED_PARAMETER_UNITS.add("mmol/L".normalize());
ALLOWED_PARAMETER_UNITS.add("mm Hg".normalize());
ALLOWED_PARAMETER_UNITS.add("UI/L".normalize());
ALLOWED_PARAMETER_UNITS.add("mOsm/Kg".normalize());
ALLOWED_PARAMETER_UNITS.add("mEq/L".normalize());
ALLOWED_PARAMETER_UNITS.add("mol / mol crea".normalize());
ALLOWED_PARAMETER_UNITS.add("mol / mol".normalize());
ALLOWED_PARAMETER_UNITS.add("mm/h".normalize());






var PARSED_DATA = null;

var LANGUAGE = ES;

function changeLanguage(object)
{
     var other = null;
     if(object.id === "ES")
     {
        other = document.getElementById("CAT");

        if(object.checked)
        {
            other.checked = false;
            LANGUAGE = ES;
        }
        else
        {
            other.checked = true;
            LANGUAGE = CAT
        }
     }
    else
    {
        other = document.getElementById("ES");

        if(object.checked)
        {
            other.checked = false;
            LANGUAGE = CAT;
        }
        else
        {
            other.checked = true;
            LANGUAGE = ES
        } 
    }

    process();  
}

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

            if(isLineASection(line))
            {
                if(currentSection==null)
                {
                    currentSection = new Section(line, []);
                    currentSection.InitializeDataFromLine(line);
                }
                else
                {
                    if(currentSection.parameters.length > 0)
                        processedSections.push(currentSection);
                    currentSection = new Section(line, []);
                    currentSection.InitializeDataFromLine(line);
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

    }


    if(currentSection.parameters.length > 0)
        processedSections.push(currentSection);

    PARSED_DATA = processedSections;

    
    BuildOutput();

    BuildFilterSection();

}


function filterChange(object)
{

    loop:
    for(var i = 0; i < PARSED_DATA.length; ++i)
    {
        var section = PARSED_DATA[i];
        
        for(var j = 0; j < section.parameters.length; ++j)
        {
            var param = section.parameters[j];
            
            if(param.name === object.id)
            {
                param.show = object.checked;
                break loop;
            }
        }
    }
    BuildOutput();
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


function isLineASection(line)
{
    var normLine = line.normalize();

    if(ALLOWED_SECTIONS.has(normLine))
    {
        return true;
    }
    

    return collectionKeyIncludedInString(ALLOWED_SECTIONS, normLine);
}

function isLineAParameter(line)
{

    var normLine = line.normalize();

    if(ALLOWED_PARAMETERS.has(normLine))
    {
        return true;
    }


    return collectionKeyIncludedInString(ALLOWED_PARAMETERS, normLine);
}

function isLineAParameterSeparator(line)
{
    var normLine = line.normalize();
    if(PARAMETER_SEPARATORS.has(normLine))
    {
        return true;
    }
    else
    {
        return collectionKeyIncludedInString(PARAMETER_SEPARATORS, normLine);
    }
}


function  collectionKeyIncludedInString(collection, string)
{
    for( const [key, value] of collection.entries())
    {
        if(string.includes(key))
            return true;
    }

    return false;
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
                if(!PARAMETER_IGNORE.has(line))
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
        // console.log("==> " + result);
        for(const [toRemove, value] of PARAMETER_TRIM.entries())
        {
            result = result.replace(toRemove, "");
        }
        // console.log("<== " + result);


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

        if(ALLOWED_PARAMETER_UNITS.has(normLine))
        {
            this.unit = normLine;
            this.hasUnit = true;
        }
        else{

            for(const [key, value] of ALLOWED_PARAMETER_UNITS.entries())
            {
                if(normLine.includes(key))
                {
                    this.unit = key;
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

    GetLocalizedName()
    {
        //check the language first!
        switch (LANGUAGE) {
            case ES:
                return this.data.ES;
            case CAT:
                return this.data.CAT;
            default:
                return this.data.ES;
        }
    }

    extractNameFromLine(line)
    {
        var normLine = line.normalize();


        if(ALLOWED_PARAMETERS.has(normLine))
        {
            this.data = ALLOWED_PARAMETERS[normLine];
            this.name = this.GetLocalizedName();
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
                    this.name = this.GetLocalizedName();
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
        this.data = null;
    }

    InitializeDataFromLine(line)
    {
        this.data = null;
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
        if(ALLOWED_SECTIONS.has(normLine))
        {
            this.data = ALLOWED_SECTIONS.get(normLine);
            return this.GetLocalizedName();
        }
        else
        {
            for(const [id, data] of ALLOWED_SECTIONS)
            {
                if(normLine.includes(id))
                {
                    this.data = data;
                    return this.GetLocalizedName();
                }
            }

            return "NOT VALID"
        }
    }


    GetLocalizedName()
    {
        switch (LANGUAGE) {
            case ES:
                return this.data.ES;
            case CAT:
                return this.data.CAT;
        
            default:
                return this.data.ES;
        }
    }
}