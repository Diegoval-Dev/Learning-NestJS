import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    console.log("I am a guard");
    const request =context.switchToHttp().getRequest();
    
    console.log(request.url);
    if (request.url === "/users/greet") return false

    if(!request.headers.authorization) return false;

    return true;
  }
}
