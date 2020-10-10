import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { ColumnOptions, PrimaryColumn } from 'typeorm';
import { createPropertyDecorator } from '../decorator.utilities';

export const PrimaryNumberColumn = createPropertyDecorator((options?: ApiPropertyOptions & ColumnOptions) => [
  IsNumber(),
  ApiProperty(options),
  PrimaryColumn('integer', options),
]);
