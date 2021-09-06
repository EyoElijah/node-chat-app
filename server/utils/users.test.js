const expect = require('expect');

const { Users } = require('./users');


describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();

        users.users = [{
            id: '1',
            name: 'John',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Vick',
            room: 'React Course'

        }, {
            id: '3',
            name: 'Mike',
            room: 'Node Course'
        }];
    });

    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: '233',
            name: 'Eyo',
            room: 'I loves me'
        }
        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for node course', () => {
        let userList = users.getUserList('Node Course');

        expect(userList).toEqual(['John', 'Mike']);
    });

    it('should return names for React course', () => {
        let userList = users.getUserList('React Course');

        expect(userList).toEqual(['Vick']);
    });

    it('should remove a user', () => {
        let userId = '1';
        let user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        let userId = '4';
        let user = users.removeUser(userId);
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        let userId = '2';
        let user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find a user', () => {
        let userId = '99';
        let user = users.getUser(userId);

        expect(user).toNotExist(userId);
    })
})