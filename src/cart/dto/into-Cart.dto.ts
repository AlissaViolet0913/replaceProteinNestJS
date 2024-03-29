import { IsNotEmpty, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class IntoCartDto {
  @IsNotEmpty()
  @Type(() => Number)
  itemId?: number;

  @IsNotEmpty()
  @Type(() => Number)
  countity?: number;
}
