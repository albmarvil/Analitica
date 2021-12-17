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
////////////////           ID                                             //// ID                           ////     CAT                       /////   ES
ALLOWED_SECTIONS.set("ESTUDI ELEMENTS FORMES",          new ParamData("ESTUDI ELEMENTS FORMES",             "ESTUDI ELEMENTS FORMES",           "ESTUDIO ELEMENTOS FORMAS",             true));
ALLOWED_SECTIONS.set("ESTUDI BACTERIOLÒGIC",            new ParamData("ESTUDI BACTERIOLÒGIC",               "ESTUDI BACTERIOLÒGIC",             "ESTUDIO BACTERIOLÓGICO",               true));
ALLOWED_SECTIONS.set("SUBSTRATS",                       new ParamData("SUBSTRATS",                          "SUBSTRATS",                        "SUBSTRATOS",                           true));
ALLOWED_SECTIONS.set("HEMOGRAMA",                       new ParamData("HEMOGRAMA",                          "HEMOGRAMA",                        "HEMOGRAMA",                            true));
ALLOWED_SECTIONS.set("HEMOSTÀSIA BÀSICA I D'URGÈNCIES", new ParamData("HEMOSTÀSIA BÀSICA I D'URGÈNCIES",    "HEMOSTÀSIA BÀSICA I D'URGÈNCIES",  "HEMOSTÁSIA BÁSICA Y DE URGENCIAS",     true));
ALLOWED_SECTIONS.set("IONS",                            new ParamData("IONS",                               "IONS",                             "IONES",                                true));
ALLOWED_SECTIONS.set("GASOS EN SANG",                   new ParamData("GASOS EN SANG",                      "GASOS EN SANG",                    "GASES EN SANGRE",                      true));
ALLOWED_SECTIONS.set("ENZIMS",                          new ParamData("ENZIMS",                             "ENZIMS",                           "ENZIMAS",                              true));
ALLOWED_SECTIONS.set("LIPIDS i LIPOPROTEÏNES",          new ParamData("LIPIDS i LIPOPROTEÏNES",             "LIPIDS i LIPOPROTEÏNES",           "LÍPIDOS Y LIPOPROTEÍNAS",              true));
ALLOWED_SECTIONS.set("ESTUDI VIROLÒGIC",                new ParamData("ESTUDI VIROLÒGIC",                   "ESTUDI VIROLÒGIC",                 "ESTUDIO VIROLÓGICO",                   true));
ALLOWED_SECTIONS.set("PROTEÏNES",                       new ParamData("PROTEÏNES",                          "PROTEÏNES",                        "PROTEÍNAS",                            true));
ALLOWED_SECTIONS.set("PROVES DERIVADES",                new ParamData("PROVES DERIVADES",                   "PROVES DERIVADES",                 "PRUEBAS DERIVADAS",                    true));
ALLOWED_SECTIONS.set("ALTRES DETERMINACIONS",           new ParamData("ALTRES DETERMINACIONS",              "ALTRES DETERMINACIONS",            "OTRAS DETERMINACIONES",                true));
ALLOWED_SECTIONS.set("MARCADORS TUMORALS",              new ParamData("MARCADORS TUMORALS",                 "MARCADORS TUMORALS",               "MARCADORS TUMORALS",                   true));
ALLOWED_SECTIONS.set("Immunoglobulines",                new ParamData("Immunoglobulines",                   "IMMUNOGLOBULINES",                 "IMMUNOGLOBULINES",                     true));
ALLOWED_SECTIONS.set("Estudi Gammapatia Monoclonal",    new ParamData("Estudi Gammapatia Monoclonal",       "ESTUDI GAMMAPATIA MONOCLONAL",     "ESTUDI GAMMAPATIA MONOCLONAL",         true));


var ALLOWED_PARAMETERS = new Map();

////////////////           ID                                                       //////      ID                                                           ////     CAT                                                    /////   ES
ALLOWED_PARAMETERS.set("Uri-Leucòcits",                                             new ParamData("Uri-Leucòcits",                                          "Uri-Leucòcits",                                                "Uri-Leucòcits",                                                true));
ALLOWED_PARAMETERS.set("Uri-Eritròcits dismòrfics",                                 new ParamData("Uri-Eritròcits dismòrfics",                              "Uri-Eritròcits dismòrfics",                                    "Uri-Eritròcits dismòrfics",                                    true));
ALLOWED_PARAMETERS.set("Uri-Eritròcits",                                            new ParamData("Uri-Eritròcits",                                         "Uri-Eritròcits",                                               "Uri-Eritròcits",                                               true));
ALLOWED_PARAMETERS.set("Uri-Cèl·lules epitelials",                                  new ParamData("Uri-Cèl·lules epitelials",                               "Uri-Cèl·lules epitelials",                                     "Uri-Cèl·lules epitelials",                                     true));
ALLOWED_PARAMETERS.set("Uri-Cilindres hialins",                                     new ParamData("Uri-Cilindres hialins",                                  "Uri-Cilindres hialins",                                        "Uri-Cilindres hialins",                                        true));
ALLOWED_PARAMETERS.set("Uri-Bacteris",                                              new ParamData("Uri-Bacteris",                                           "Uri-Bacteris",                                                 "Uri-Bacteris",                                                 true));
ALLOWED_PARAMETERS.set("Uri-Llevats",                                               new ParamData("Uri-Llevats",                                            "Uri-Llevats",                                                  "Uri-Llevats",                                                  true));
ALLOWED_PARAMETERS.set("Uri-Creatinini orina recent",                               new ParamData("Uri-Creatinini orina recent",                            "Uri-Creatinini orina recent",                                  "Uri-Creatinini orina recent",                                  true));
ALLOWED_PARAMETERS.set("Uri-Proteïna orina recent",                                 new ParamData("Uri-Proteïna orina recent",                              "Uri-Proteïna orina recent",                                    "Uri-Proteïna orina recent",                                    true));
ALLOWED_PARAMETERS.set("Uri-Proteïna / creatinina; quocient",                       new ParamData("Uri-Proteïna / creatinina; quocient",                    "Uri-Proteïna / creatinina; quocient",                          "Uri-Proteïna / creatinina; quocient",                          true));
ALLOWED_PARAMETERS.set("Uri-Albúmina orina recent",                                 new ParamData("Uri-Albúmina orina recent",                              "Uri-Albúmina orina recent",                                    "Uri-Albúmina orina recent",                                    true));
ALLOWED_PARAMETERS.set("Uri-Albúmina / Creatinini orina recent",                    new ParamData("Uri-Albúmina / Creatinini orina recent",                 "Uri-Albúmina / Creatinini orina recent",                       "Uri-Albúmina / Creatinini orina recent",                       true));
ALLOWED_PARAMETERS.set("Comentari sediment:",                                       new ParamData("Comentari sediment:",                                    "Comentari sediment:",                                          "Comentari sediment:",                                          true));
ALLOWED_PARAMETERS.set("Hematies",                                                  new ParamData("Hematies",                                               "Hematies",                                                     "Hematies",                                                     true));
ALLOWED_PARAMETERS.set("Hemoglobina corpuscular mitja (HCM)",                       new ParamData("Hemoglobina corpuscular mitja (HCM)",                    "Hemoglobina corpuscular mitja (HCM)",                          "Hemoglobina corpuscular mitja (HCM)",                          true));
ALLOWED_PARAMETERS.set("Hemoglobina",                                               new ParamData("Hemoglobina",                                            "Hemoglobina",                                                  "Hemoglobina",                                                  true));
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
ALLOWED_PARAMETERS.set("Srm-Clorur",                                                new ParamData("Srm-Clorur",                                             "Srm-Clorur",                                                   "Srm-Clorur",                                                   true));
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
ALLOWED_PARAMETERS.set("Srm-Lactat-deshidrogenasa",                                 new ParamData("Srm-Lactat-deshidrogenasa",                              "Srm-Lactat-deshidrogenasa",                                    "Srm-Lactat-deshidrogenasa",                                    true));
ALLOWED_PARAMETERS.set("Srm-Creatina-cinasa",                                       new ParamData("Srm-Creatina-cinasa",                                    "Srm-Creatina-cinasa",                                          "Srm-Creatina-cinasa",                                          true));
ALLOWED_PARAMETERS.set("Srm-Colesterol d'LDL (càlcul Friedewald)",                  new ParamData("Srm-Colesterol d'LDL (càlcul Friedewald)",               "Srm-Colesterol d'LDL (càlcul Friedewald)",                     "Srm-Colesterol d'LDL (càlcul Friedewald)",                     true));
ALLOWED_PARAMETERS.set("Srm-Colesterol d'HDL",                                      new ParamData("Srm-Colesterol d'HDL",                                   "Srm-Colesterol d'HDL",                                         "Srm-Colesterol d'HDL",                                         true));
ALLOWED_PARAMETERS.set("Srm-Colesterol",                                            new ParamData("Srm-Colesterol",                                         "Srm-Colesterol",                                               "Srm-Colesterol",                                               true));
ALLOWED_PARAMETERS.set("Srm-Triglicèrid",                                           new ParamData("Srm-Triglicèrid",                                        "Srm-Triglicèrid",                                              "Srm-Triglicèrid",                                              true));
ALLOWED_PARAMETERS.set("Srm-Proteïna C reactiva",                                   new ParamData("Srm-Proteïna C reactiva",                                "Srm-Proteïna C reactiva",                                      "Srm-Proteïna C reactiva",                                      true));
ALLOWED_PARAMETERS.set("Srm-Proteïna",                                              new ParamData("Srm-Proteïna",                                           "Srm-Proteïna",                                                 "Srm-Proteïna",                                                 true));
ALLOWED_PARAMETERS.set("Srm-Albúmina",                                              new ParamData("Srm-Albúmina",                                           "Srm-Albúmina",                                                 "Srm-Albúmina",                                                 true));
ALLOWED_PARAMETERS.set("Càrrega viral Citomegalovirus (PCR temps real)",            new ParamData("Càrrega viral Citomegalovirus (PCR temps real)",         "Càrrega viral Citomegalovirus (PCR temps real)",               "Càrrega viral Citomegalovirus (PCR temps real)",               true));
ALLOWED_PARAMETERS.set("Uri-Ió sodi orina recent",                                  new ParamData("Uri-Ió sodi orina recent",                               "Uri-Ió sodi orina recent",                                     "Uri-Ió sodi orina recent",                                     true));
ALLOWED_PARAMETERS.set("Uri-Sodi / creatinina; quocient",                           new ParamData("Uri-Sodi / creatinina; quocient",                        "Uri-Sodi / creatinina; quocient",                              "Uri-Sodi / creatinina; quocient",                              true));
ALLOWED_PARAMETERS.set("Uri-Ió potassi orina recent",                               new ParamData("Uri-Ió potassi orina recent",                            "Uri-Ió potassi orina recent",                                  "Uri-Ió potassi orina recent",                                  true));
ALLOWED_PARAMETERS.set("Uri-Potassi / creatinina; quocient",                        new ParamData("Uri-Potassi / creatinina; quocient",                     "Uri-Potassi / creatinina; quocient",                           "Uri-Potassi / creatinina; quocient",                           true));
ALLOWED_PARAMETERS.set("Uri-Clorur orina recent",                                   new ParamData("Uri-Clorur orina recent",                                "Uri-Clorur orina recent",                                      "Uri-Clorur orina recent",                                      true));
ALLOWED_PARAMETERS.set("Uri-Clorur / creatinina; quocient",                         new ParamData("Uri-Clorur / creatinina; quocient",                      "Uri-Clorur / creatinina; quocient",                            "Uri-Clorur / creatinina; quocient",                            true));
ALLOWED_PARAMETERS.set("Mioglobina orina RECENT",                                   new ParamData("Mioglobina orina RECENT",                                "Mioglobina orina RECENT",                                      "Mioglobina orina RECENT",                                      true));
ALLOWED_PARAMETERS.set("San-Eritrosedimentació (VSG)",                              new ParamData("San-Eritrosedimentació (VSG)",                           "San-Eritrosedimentació (VSG)",                                 "San-Eritrosedimentació (VSG)",                                 true));
ALLOWED_PARAMETERS.set("Srm-Beta-2-microglobulina",                                 new ParamData("Srm-Beta-2-microglobulina",                              "Srm-Beta-2-microglobulina",                                    "Srm-Beta-2-microglobulina",                                    true));
ALLOWED_PARAMETERS.set("Srm-Immunoglobulina G",                                     new ParamData("Srm-Immunoglobulina G",                                  "Srm-Immunoglobulina G",                                        "Srm-Immunoglobulina G",                                        true));
ALLOWED_PARAMETERS.set("Srm-Immunoglobulina A",                                     new ParamData("Srm-Immunoglobulina A",                                  "Srm-Immunoglobulina A",                                        "Srm-Immunoglobulina A",                                        true));
ALLOWED_PARAMETERS.set("Srm-Immunoglobulina M",                                     new ParamData("Srm-Immunoglobulina M",                                  "Srm-Immunoglobulina M",                                        "Srm-Immunoglobulina M",                                        true));
ALLOWED_PARAMETERS.set("Srm-Cadenes kappa lliures",                                 new ParamData("Srm-Cadenes kappa lliures",                              "Srm-Cadenes kappa lliures",                                    "Srm-Cadenes kappa lliures",                                    true));
ALLOWED_PARAMETERS.set("Srm-Cadenes lambda lliures",                                new ParamData("Srm-Cadenes lambda lliures",                             "Srm-Cadenes lambda lliures",                                   "Srm-Cadenes lambda lliures",                                   true));
ALLOWED_PARAMETERS.set("Srm-Cadenes Kappa/ cadenes lambda",                         new ParamData("Srm-Cadenes Kappa/ cadenes lambda",                      "Srm-Cadenes Kappa/ cadenes lambda",                            "Srm-Cadenes Kappa/ cadenes lambda",                            true));



var QUALITATIVE_PARAMETERS = new Map();

////////////////                ID                                                  ////        ID                                                      ////     CAT                                                   /////   ES
QUALITATIVE_PARAMETERS.set("Uri-Eritròcits dismòrfics",                             new ParamData("Uri-Eritròcits dismòrfics",                          "Uri-Eritròcits dismòrfics",                                    "Uri-Eritròcits dismòrfics",                                    true));
QUALITATIVE_PARAMETERS.set("Uri-Llevats",                                           new ParamData("Uri-Llevats",                                        "Uri-Llevats",                                                  "Uri-Llevats",                                                  true));
QUALITATIVE_PARAMETERS.set("Càrrega viral Citomegalovirus (PCR temps real)",        new ParamData("Càrrega viral Citomegalovirus (PCR temps real)",     "Càrrega viral Citomegalovirus (PCR temps real)",               "Càrrega viral Citomegalovirus (PCR temps real)",               true));
QUALITATIVE_PARAMETERS.set("Comentari sediment:",                                   new ParamData("Comentari sediment:",                                "Comentari sediment:",                                          "Comentari sediment:",                                          true));
QUALITATIVE_PARAMETERS.set("Mioglobina orina RECENT",                               new ParamData("Mioglobina orina RECENT",                             "Mioglobina orina RECENT",                                     "Mioglobina orina RECENT",                                      true));


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