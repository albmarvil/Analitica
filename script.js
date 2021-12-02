

var ALLOWED_SECTIONS = [
    "ESTUDI ELEMENTS FORMES".normalize(),
    "SUBSTRATS".normalize(),
    "PROTEÏNES".normalize()
];


var ALLOWED_PARAMETERS = [
    "Uri-Leucòcits".normalize(),
    "Uri-Eritròcits".normalize(),
    "Uri-Eritròcits dismòrfics".normalize(),
    "Uri-Cèl·lules epitelials".normalize(),
    "Uri-Cilindres hialins".normalize(),
    "Uri-Bacteris".normalize(),
    "Uri-Llevats".normalize(),
    "Uri-Creatinini orina recent".normalize(),
    "Uri-Proteïna orina recent".normalize(),
    "Uri-Proteïna / creatinina; quocient".normalize(),
    "Uri-Albúmina orina recent".normalize(),
    "Uri-Albúmina / Creatinini orina recent".normalize()
];

var QUALITATIVE_PARAMETERS = [
    "Uri-Eritròcits dismòrfics".normalize(),
    "Uri-Llevats".normalize()
];

var ALLOWED_QUALITATEIVE_VALUES = [
    "Negatiu".normalize(),  
];

var SEPARATORS = [
    "\nb b b".normalize(),
    "\nb b".normalize(),
    "\nblanco".normalize(),
    "\nblanc".normalize(),
    "\nb".normalize(),
    "\n.".normalize(),
    "\n".normalize()
];

var SECTION_SEPARATORS = [
    "blanco".normalize()
];

var PARAMETER_SEPARATORS = [
    "blanc".normalize(),
    "b b".normalize()
];

var PARAMETER_IGNORE = [
    "."
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
    "mg/L".normalize()
];


function processOrina()
{
    process("ANALISI D'ORINA".normalize());
}



function process(startLine)
{
    
    var input = document.getElementById("input");
    var output = document.getElementById("output");

    var inputText = input.value.normalize();

    var splitted = inputText.split("\n");
    

    var outputText = "";
    var currentSection = null;
    var processedSections = [];



    for(var i = 0; i < splitted.length; ++i)
    {
        var line = splitted[i].normalize();
        if(!isEndOfFile(line))
        {
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
        }

        //check if it is end of file
        //else
            //try to identify a section
                //close old section open new
            //identify new parameter
                //construct parameter with all the required lines
                //jump through the required lines for next iteration
    }

    output.value = outputText;
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
    EOF.forEach(element => {
        if(line.includes(element))
            return true;
    });

    return false;
}

function isLineASection(line)
{
    if(ALLOWED_SECTIONS.includes(line.normalize()))
    {
        return true;
    }
    else
    {
        ALLOWED_SECTIONS.forEach(element => {
            if(line.normalize().includes(element))
                return true
        });
        return false;
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
        ALLOWED_PARAMETERS.forEach(element => {
            if(normLine.includes(element))
                return true;
        });
        return false;
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
        PARAMETER_SEPARATORS.forEach(element => {
            if(normLine.includes(element))
                return true;
        });
        return false;
    }
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
            if(!isLineAParameterSeparator(line))
            {
                if(!PARAMETER_IGNORE.includes(line))
                    parameterLines.push(line);
                lastIndex = i;
            }
            else
            {
                break;
            }
        }

        //concat lines
        var result = concatStringArray(parameterLines);

        //extract name and remove it from processing string
        var result = this.extractNameFromLine(line);

        //next find the unit. If it doesn't have units we are handling a qualitative parameter
        result = this.extractUnitFromLine(result);

        //get the value, either nominal or qualitative
        result = this.extractValueFromLine(result);

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
            return normLine;
        }
        else
        {
            //if it has unit, split string by the unit. First result is the value, the rest is discarded
            var splt = normLine.split(this.unit);
            this.value = splt[0];
            this.hasValue = true;
            return "";
        }
    }

    extractUnitFromLine(line)
    {
        var normLine = line.normalize();

        if(ALLOWED_PARAMETER_UNITS.includes(normLine))
        {
            this.unit = ALLOWED_PARAMETER_UNITS[ALLOWED_PARAMETER_UNITS.indexOf(normLine)];
            this.hasUnit = true;
            return normLine.replace(this.unit, "");
        }
        else{
            ALLOWED_PARAMETER_UNITS.forEach(element => {
                
                if(normLine.includes(element))
                {
                    this.unit = element;
                    this.hasUnit = true;
                    return normLine.replace(this.unit, "");
                }
            });
        }

        //if we are here it means the parameter data doesn't have units. it is a qualitative parameter
        this.unit = "";
        this.hasUnit = false;

        return normLine;
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
            ALLOWED_PARAMETERS.forEach(element => {
                if(normLine.includes(element))
                {
                    this.name = element;
                    this.hasName = true;
                    return normLine.replace(element, "");
                }
            });
        }

        this.name = false;
        this.hasName = false;
        return normLine;
    }

    toString()
    {
        return this.name + " " + this.value + " " + this.unit+"; "; 
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
        return this.name.toUpperCase();
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
            ALLOWED_SECTIONS.forEach(element => {
                if(normLine.includes(element))
                {
                    return element;
                }
            });

            return "NOT VALID"
        }
    }
}