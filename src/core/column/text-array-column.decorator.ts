import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import { Column } from 'typeorm';
import { TextArrayColumnOptions } from './text-array-column-options';

export function TextArrayColumn(options?: TextArrayColumnOptions) {
  return (target: Record<string, any>, propertyKey: string | symbol) => {
    IsArray()
    ApiProperty({
      type: String,
      isArray: true,
      nullable: !!options?.nullable,
      required: !!options?.required,
    })(target, propertyKey);
    Column('text', {
      array: true,
      nullable: !!options?.nullable,
    })(target, propertyKey);
  };
}

