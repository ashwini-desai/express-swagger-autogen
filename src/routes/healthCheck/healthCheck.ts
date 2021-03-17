import { RequestHandler } from 'express';

export const healthCheck: RequestHandler = (_, res) => {
    // #swagger.operationId = 'healthCheck'
    // #swagger.tags = ['HealthCheck']
    // #swagger.description = 'Endpoint that gives running status of satellite-service'

    res.json({ status: 'Service is up and running' });
};
