Github popular repo API

This API will return a list of the most popular repositories, sorted by number of stars. It will also accept n option to be able to view the top 10, 50, 100 repositories. If given a date, the most popular repositories created from this date onwards will be returned.

To run:
- `npm install`
- `npm start`

Example requests (can be run in the browser, Postman, or curl):
- `http://localhost:3000/repos?language=javascript&viewTop=10&date=2020-02-02`
- `http://localhost:3000/repos?language=javascript&viewTop=50`
- `http://localhost:3000/repos?language=javascript`
- `http://localhost:3000/repos`

The API response will return an array of all matching items.

Testing:
- `npm test`