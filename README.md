# Konversation plugin for ChatbotBase
A translation provider for [ChatbotBase] allow you to provide diverse outputs with [Konversation].

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

## Usage
This provider allows create your outputs with Konversation. To use it you need to 
overwrite the `loadTracker()` method like this:

```typescript
protected provideTranslations(): TranslationProvider {
    return new KonversationProvider();
}
```

## License
[Apache 2.0](LICENSE)

[ChatbotBase]: https://github.com/rekire/ChatbotBase
[npm-image]: https://img.shields.io/npm/v/chatbotbase-konversationprovider.svg
[npm-url]: https://npmjs.org/package/chatbotbase-konversationprovider
[downloads-image]: https://img.shields.io/npm/dm/chatbotbase-alexaplatform.svg
[downloads-url]: https://npmjs.org/package/chatbotbase-konversationprovider
[Konversation]: https://npmjs.org/package/konversation
