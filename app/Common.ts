/*
Demo generic, module, namespace. how to use it?
*/
//--------------Demo module----------------
module Spiralg.vnext.pipe.typeSCript{
export class Common{
	//Access cannot every where
publicString: string = "Cannot access";
//let color: string = "blue";
printObject<T>(arg: T): T {
	//Convert to json
	var objectData=JSON.stringify(arg);
	//Save log
    console.log("Json_Logging using Spiralg.vnext.pipe.typeSCript.Common:"+objectData);
	// return object
	return arg;
}
}
//------------------
class Greeter {
    greeting: string;

    constructor (message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}
}
//-------Demo namespace----------
namespace SpiralG.pipe.vnext.typeSCript{
export class Common{
printObject(str: any):void{
	//Convert to json
	var objectData=JSON.stringify(str);
	//Save log
    console.log("Json Logging using SpiralG.pipe.vnext.typeSCript.Common:"+objectData);
}

}
//----------------
class Greeter {
    greeting: string;

    constructor (message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}
}
