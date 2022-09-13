import server from '../server.js';
import supertest from 'supertest';
const requestWithSupertest = supertest(server);

describe('Repo Endpoints', () => {
    it('GET /repos should return 200 and contain json string', async () => {
        const res = await requestWithSupertest.get('/repos');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
    });
});