let expect = require('expect');
let { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate the correct test object', () => {
        let from = 'jen';
        let text = 'some message';
        let message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, text });
    });
});