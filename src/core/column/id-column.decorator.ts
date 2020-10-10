import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { PrimaryGeneratedColumn } from 'typeorm';
import { createPropertyDecorator } from '../decorator.utilities';

export const IdColumn = createPropertyDecorator((options?: ApiPropertyOptions) => [
  ApiProperty(options),
  PrimaryGeneratedColumn()
]);