import { NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { extractTokenFromHeader } from "src/utils/helper";

export class CheckTokenPresent implements NestMiddleware {
  
  use(req: Request, res: Response, next: NextFunction) {

    const token = extractTokenFromHeader(req);
    return {token};
      
  }

}
