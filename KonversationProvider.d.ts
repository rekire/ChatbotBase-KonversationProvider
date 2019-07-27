import { TranslationProvider, IOMessage, Translation } from 'chatbotbase';
export declare class KonversationProvider implements TranslationProvider {
    getString(input: IOMessage, key: string, ...args: string[] | Translation[]): string | null;
}
