import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { Column } from 'typeorm';
import { ColumnCommonOptions } from 'typeorm/decorator/options/ColumnCommonOptions';
import { createPropertyDecorator } from '../decorator.utilities';

export const NumberColumn = createPropertyDecorator((options?: ApiPropertyOptions & ColumnCommonOptions) => [
  IsNumber(),
  ApiProperty(options),
  Column('integer', options)
]);
