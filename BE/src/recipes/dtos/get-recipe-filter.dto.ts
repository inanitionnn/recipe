import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class GetRecipeFilterDto {
  @ApiProperty({
    description: 'Filter recipes by ingredient',
    example: 'chicken_breast',
    required: false,
    maxLength: 255,
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  ingredient?: string;

  @ApiProperty({
    description: 'Filter recipes by country',
    example: 'Canadian',
    required: false,
    maxLength: 255,
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  country?: string;

  @ApiProperty({
    description: 'Filter recipes by category',
    example: 'Seafood',
    required: false,
    maxLength: 255,
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  category?: string;
}
