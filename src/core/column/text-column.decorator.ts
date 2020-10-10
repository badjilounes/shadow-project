import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsString } from 'class-validator';
import { Column } from 'typeorm';
import { createPropertyDecorator } from '../decorator.utilities';
import { TextColumnOptions } from './text-column-options';

export const TextColumn = createPropertyDecorator((options?: TextColumnOptions) => {
  const decorators = [
    IsString(),
    Column('character varying', {
      nullable: !!options?.nullable,
      unique: !!options?.unique,
      default: options?.default,
    })
  ];

  if (options?.internal) {
    decorators.push(Exclude());
  } else {
    decorators.push(ApiProperty({
      type: String,
      required: !!options?.required,
      nullable: !!options?.nullable,
      enum: options?.enum
    }));
  }
  return decorators;
});