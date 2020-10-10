import { Type } from '@nestjs/common';

export interface JsonColumnOptions {
  internal?: boolean;
  nullable?: boolean;
  required?: boolean;
  type?: Type<unknown> | Function | [Function] | string | Record<string, any>
}