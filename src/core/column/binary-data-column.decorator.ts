import { ApiPropertyOptions } from '@nestjs/swagger';
import { Column } from 'typeorm';
import { ColumnCommonOptions } from 'typeorm/decorator/options/ColumnCommonOptions';
import { createPropertyDecorator } from '../decorator.utilities';

export const BinaryDataColumn = createPropertyDecorator((options?: ApiPropertyOptions & ColumnCommonOptions) => [
  Column('bytea', options),
]);