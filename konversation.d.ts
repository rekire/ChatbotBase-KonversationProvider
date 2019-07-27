declare module "konversation" {
    class Konversation {
        constructor(key: string, environment: Environment)
        createOutput(data: any) : Output
    }
    class Output {
        constructor(displayText : string, ssml : string, reprompts : string[], suggestions : string[], extras: any)
        displayText : string;
        ssml : string;
        reprompts : string[];
        suggestions : string[];
        extras : any;
    }
    class Environment {
        constructor(platform : string, locale)
        platform : string;
        locale : string;
    }
}