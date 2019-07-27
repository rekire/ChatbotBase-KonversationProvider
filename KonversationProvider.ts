import {TranslationProvider, IOMessage, Translation, Message} from 'chatbotbase';
import {Konversation, Environment} from 'konversation';

export class KonversationProvider implements TranslationProvider {
    getString(input: IOMessage, key: string, ...args: string[] | Translation[]): string | null {
        const konversation = new Konversation(key, new Environment(input.platform, input.language));
        const output = konversation.createOutput(args);
        return <Message>output;
    }
}