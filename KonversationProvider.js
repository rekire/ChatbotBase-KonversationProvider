"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const konversation_1 = require("konversation");
class KonversationProvider {
    getString(input, key, ...args) {
        const konversation = new konversation_1.Konversation(key, new konversation_1.Environment(input.platform, input.language));
        const output = konversation.createOutput(args);
        return output;
    }
}
exports.KonversationProvider = KonversationProvider;
//# sourceMappingURL=KonversationProvider.js.map