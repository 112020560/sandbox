/* eslint-disable prefer-rest-params */
import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@exceptions/HttpException';
import { logger } from '@utils/logger';

const traceMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const buffers = [];
  console.log('entre al middleware');
  const proxyHandler = {
    apply(target, thisArg, argumentsList) {
      const contentType = res.getHeader('content-type');
      if (typeof contentType === 'string' && contentType.includes('json') && argumentsList[0]) {
        buffers.push(argumentsList[0]);
      }
      return target.call(thisArg, ...argumentsList);
    },
  };
  res.write = new Proxy(res.write, proxyHandler);
  res.end = new Proxy(res.end, proxyHandler);
  res.on('finish', () => {
    // tracing logic inside
    logger.info(req.body, res, Buffer.concat(buffers).toString('utf8'));
  });
  next();
};

export default traceMiddleware;
