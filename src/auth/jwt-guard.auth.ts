import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { configDotenv } from "dotenv";
import { Request } from "express";
import { ClientsService } from "src/clients/clients.service";
configDotenv();

@Injectable()
export class JWTGuard implements CanActivate {

  constructor(
    private jwtService: JwtService,
    private clientService: ClientsService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) throw new UnauthorizedException("Invalid token");

    try {
      const payload = await this.jwtService.verifyAsync(token, {secret : process.env.JWT_SECRET});
      const username = payload['username'];
      request['signedInUsername'] = username;
      request['signedInUser'] = await this.clientService.findUserbyUsername(username);
    } catch (error) {
      throw new UnauthorizedException("Invalid token: " + error);
    }

    return true;
  }

  extractTokenFromHeader(request: Request) : string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type == 'Bearer' ? token : undefined;
  }

}
