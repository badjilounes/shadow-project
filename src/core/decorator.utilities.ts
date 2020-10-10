export function createClassDecorator<T>(factory: (options: T) => Function[]): (options: T) => (target: Record<string, any>) => void {
  return (options: T) => (target: Record<string, any>) => factory(options).forEach(decorator => decorator(target));
}

export function createPropertyDecorator<T>(factory: () => Function[]): () => (target: Record<string, any>, propertyKey: string | symbol) => void;
export function createPropertyDecorator<T>(factory: (options?: T) => Function[]): (options?: T) => (target: Record<string, any>, propertyKey: string | symbol) => void;
export function createPropertyDecorator<T>(factory: (options: T) => Function[]): (options: T) => (target: Record<string, any>, propertyKey: string | symbol) => void;
export function createPropertyDecorator<T>(factory: (options?: T) => Function[]): (options?: T) => (target: Record<string, any>, propertyKey: string | symbol) => void {
  return (options?: T) => (target: Record<string, any>, propertyKey: string | symbol) => factory(options).forEach(decorator => decorator(target, propertyKey));
}

export function createMethodDecorator<T>(factory: () => Function[]): () => (target: Record<string, any>, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => void;
export function createMethodDecorator<T>(factory: (options: T) => Function[]): (options: T) => (target: Record<string, any>, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => void;
export function createMethodDecorator<T>(factory: (options?: T) => Function[]): (options?: T) => (target: Record<string, any>, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => void;
export function createMethodDecorator<T>(factory: (options?: T) => Function[]): (options?: T) => (target: Record<string, any>, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => void {
  return (options?: T) => (target: Record<string, any>, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => factory(options).forEach(decorator => decorator(target, propertyKey, descriptor));
}

export function createParamDecorator<T>(factory: (options?: T) => Function[]): (options?: T) => (target: Record<string, any>, propertyKey: string | symbol, parameterIndex: number) => void {
  return (options?: T) => (target: Record<string, any>, propertyKey: string | symbol, parameterIndex) => factory(options).forEach(decorator => decorator(target, propertyKey, parameterIndex));
}

