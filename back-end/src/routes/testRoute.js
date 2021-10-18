export const testRoute = {
    path: '/store-api/test',
    method: 'get',
    handler: (req, res) => {
        res.status(200).send('It works!');
    },
};