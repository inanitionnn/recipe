import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class IdParamDto {
  @ApiProperty({
    description: 'Id of the entity',
    example: '521772',
  })
  @IsNumberString()
  id: string;
}
