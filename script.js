// /// TODO rework data classes to work with maps, so we can have translations and default parameter values
// //-section data
//     //section class
//     //section to string
//     //section html
//     //section comparisons
//     //section loops
// //-parameter data
//     //parameter class
//     //parameter to string
//     //parameter html
//     //parameter comparisons
//     //parameter loops
//     //parameter trims
// const P = new Map();
// P.set("ID", new ParamData("ID", "catalan", "español", false));

// class ParamData
// {
//     constructor(ID, CAT, ES, SHOW)
//     {
//         this.ID = ID;
//         this.CAT = CAT;
//         this.ES = ES;
//         this.SHOW = SHOW;
//     }
// }


///ADD PARAMETERS
///PROTEINOGRAMA
///SECTION AND SUBSECTIONS
//ONLY ONE SECTION (Original analisis)

/////TODOEND

var ALLOWED_SECTIONS = [
    "ESTUDI ELEMENTS FORMES".normalize(),
    "SUBSTRATS".normalize(),
    "HEMOGRAMA".normalize(),
    "HEMOSTÀSIA BÀSICA I D'URGÈNCIES".normalize(),
    // "BIOQUIMICA".normalize(),
    "IONS".normalize(),
    "GASOS EN SANG".normalize(),
    "ENZIMS".normalize(),
    "LIPIDS i LIPOPROTEÏNES".normalize(),
    "ESTUDI VIROLÒGIC".normalize(),
    "PROTEÏNES".normalize()
];


var ALLOWED_PARAMETERS = [
    "Uri-Leucòcits".normalize(),
    "Uri-Eritròcits dismòrfics".normalize(),
    "Uri-Eritròcits".normalize(),
    "Uri-Cèl·lules epitelials".normalize(),
    "Uri-Cilindres hialins".normalize(),
    "Uri-Bacteris".normalize(),
    "Uri-Llevats".normalize(),
    "Uri-Creatinini orina recent".normalize(),
    "Uri-Proteïna orina recent".normalize(),
    "Uri-Proteïna / creatinina; quocient".normalize(),
    "Uri-Albúmina orina recent".normalize(),
    "Uri-Albúmina / Creatinini orina recent".normalize(),
    "Hematies".normalize(),
    "Hemoglobina corpuscular mitja (HCM)".normalize(),
    "Hemoglobina".normalize(),
    "Hematòcrit".normalize(),
    "Volum corpuscular mig (VCM)".normalize(),
    "Concentració HGB Corpuscular mitja".normalize(),
    "Ample Distribució Eritrocits (ADE)".normalize(),
    "San-Eritroblastes, f".normalize(),
    "San-Eritroblastes, c".normalize(),
    "Leucòcits".normalize(),
    "Neutròfils %".normalize(),
    "Limfòcits %".normalize(),
    "Monòcits %".normalize(),
    "Eosinòfils %".normalize(),
    "Basòfils %".normalize(),
    "Neutròfils".normalize(),
    "Limfòcits".normalize(),
    "Monòcits".normalize(),
    "Eosinòfils".normalize(),
    "Basòfils".normalize(),
    "Plaquetes".normalize(),
    "Volum plaquetari mig".normalize(),
    "Pla-Temps de Protrombina (ràtio)".normalize(),
    "Pla-Temps de Protrombina (%)".normalize(),
    "Pla-Temps de Protrombina (INR)".normalize(),
    "Pla-Temps de Protrombina (s)".normalize(),
    "Pla-TTPA (ràtio)".normalize(),
    "Pla-TTPA (s)".normalize(),
    "Pla-Fibrinogen derivat".normalize(),
    "Srm-Glucosa".normalize(),
    "Srm-Urea".normalize(),
    "Srm-Creatinini".normalize(),
    "Pac-Filtrat glomerular (estimació segons CKD-EPI)".normalize(),
    "Srm-Urat".normalize(),
    "Srm-Bilirubina esterificada".normalize(),
    "Srm-Bilirubina".normalize(),
    "Srm-Ió sodi".normalize(),
    "Srm-Ió potassi".normalize(),
    "Srm-Fosfatasa alcalina".normalize(),
    "Srm-Fosfat".normalize(),
    "Srm-Calci".normalize(),
    "vSan-Ió calci (II)".normalize(),
    "Calci iònic-Sang venosa pH=7.40 (37ºC)".normalize(),
    "vSan-Plasma; pH".normalize(),
    "vSan-Diòxid de carboni (lliure); tensió".normalize(),
    "vSan-Oxigen; tensió".normalize(),
    "vSan-Hidrogencarbonat; c.subst.(actual)".normalize(),
    "vSan-Diòxid de carboni (total); c.subst".normalize(),
    "vSan-Excés de base(llocs enllaçants d'H+); c.subst.".normalize(),
    "vSan-Hidrogencarbonat; c.subst.(estandar)".normalize(),
    "Hb(vSan)-Oxigen; fr.sat. .".normalize(),
    "Srm-Aspartat-aminotransferasa".normalize(),
    "Srm-Alanina-aminotransferasa".normalize(),
    "Srm-Gamma-glutamiltransferasa".normalize(),
    "Srm-Colesterol".normalize(),
    "Srm-Triglicèrid".normalize(),
    "Srm-Proteïna".normalize(),
    "Srm-Albúmina".normalize(),
    "Càrrega viral Citomegalovirus (PCR temps real)".normalize()
];

var QUALITATIVE_PARAMETERS = [
    "Uri-Eritròcits dismòrfics".normalize(),
    "Uri-Llevats".normalize(),
    "Càrrega viral Citomegalovirus (PCR temps real)".normalize()
];

// var SEPARATORS = [
//     "\nb b b".normalize(),
//     "\nb b".normalize(),
//     "\nblanco".normalize(),
//     "\nblanc".normalize(),
//     "\nb".normalize(),
//     "\n.".normalize(),
//     "\n".normalize()
// ];

// var SECTION_SEPARATORS = [
//     "blanco".normalize()
// ];

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

function process(startLine)
{
    
    var input = document.getElementById("input");
    

    var inputText = input.value.normalize();

    var splitted = inputText.split("\n");
    

    var currentSection = null;
    var processedSections = [];
    var EOFProcessed = false;



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
    if(ALLOWED_SECTIONS.includes(line.normalize()))
    {
        return true;
    }
    else
    {
        return arrayElementIncludedInString(ALLOWED_SECTIONS, line);
    }
}

function isLineAParameter(line)
{
    var normLine = line.normalize();
    if(ALLOWED_PARAMETERS.includes(normLine))
    {
        return true;
    }
    else
    {
        return arrayElementIncludedInString(ALLOWED_PARAMETERS, normLine);
    }
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
    constructor(name, value, unit, show)
    {
        this.name = name;
        this.value = value;
        this.unit = unit;
        this.show = show;
        this.isValid = true;
        this.hasName = true;
        this.hasValue = true;
        this.hasUnit = true;
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

        this.show = true;

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

    extractNameFromLine(line)
    {
        var normLine = line.normalize();


        if(ALLOWED_PARAMETERS.includes(normLine))
        {
            this.name = ALLOWED_PARAMETERS[ALLOWED_PARAMETERS.indexOf(normLine)];
            this.hasName = true;
            return normLine.replace(this.name,"");
        }
        else
        {

            for(var i = 0; i < ALLOWED_PARAMETERS.length; ++i)
            {
                var element = ALLOWED_PARAMETERS[i];

                if(normLine.includes(element))
                {
                    this.name = element;
                    this.hasName = true;
                    return normLine.replace(element, "");
                }
            }
        }

        this.name = false;
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