const { app } = require('@azure/functions');

app.http('githubHTTPTrigger1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'Julius und Timo';

        return { body: `Guten Tag , ${name}! es funktioniert:)` };
    }
});
