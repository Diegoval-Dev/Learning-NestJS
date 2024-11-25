import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateUsersPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("value", value)

    const age = parseInt(value.age.toString());

    if(isNaN(value.age)){
      throw new HttpException("Age must be a number", HttpStatus.BAD_REQUEST)
    }

    return {...value, age: age};
  }
}
