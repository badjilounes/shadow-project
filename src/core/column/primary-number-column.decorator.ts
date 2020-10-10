import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { PrimaryColumn } from 'typeorm';
import { createPropertyDecorator } from '../decorator.utilities';

export const PrimaryNumberColumn = createPropertyDecorator((options?: ApiPropertyOptions) => [
  ApiProperty(options),
  PrimaryColumn({ type: 'integer' })
]);