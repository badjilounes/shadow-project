import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';
import { Column } from 'typeorm';
import { ColumnCommonOptions } from 'typeorm/decorator/options/ColumnCommonOptions';
import { createPropertyDecorator } from '../decorator.utilities';

export const BooleanColumn = createPropertyDecorator((options?: ApiPropertyOptions & ColumnCommonOptions) => [
  IsBoolean(),
  ApiProperty({ ...options, type: Boolean }),
  Column('boolean', options)
]);