import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { IsDate } from 'class-validator';
import { Column } from 'typeorm';
import { ColumnCommonOptions } from 'typeorm/decorator/options/ColumnCommonOptions';
import { createPropertyDecorator } from '../decorator.utilities';

export const DateColumn = createPropertyDecorator((options?: ApiPropertyOptions & ColumnCommonOptions) => [
  IsDate(),
  ApiProperty({ ...options, type: String, format: 'date-time' }),
  Column('timestamp without time zone', options)
]);