let expect = require('expect');
let { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate the correct test object', () => {
        let from = 'jen';
        let text = 'some message';
        let message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, text });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let from = 'victor';
        let latitude = 23;
        let longitude = 12;
        let url = 'https://www.google.com/maps?q=23,12';
        let message = generateLocationMessage(from, latitude, longitude);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, url });
    })
});