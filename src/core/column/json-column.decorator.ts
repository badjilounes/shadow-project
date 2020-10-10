import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Column } from 'typeorm';
import { createPropertyDecorator } from '../decorator.utilities';
import { JsonColumnOptions } from './json-column-options';

export const JsonColumn = createPropertyDecorator((options?: JsonColumnOptions) => {
  const decorators = [
    Column('jsonb', {
      nullable: options?.nullable,
    })
  ];

  if (options?.internal) {
    decorators.push(Exclude())
  } else {
      decorators.push(ApiProperty({
        nullable: options?.nullable,
        required: options?.required,
        type: options?.type
      }));
  }
  return decorators;
});