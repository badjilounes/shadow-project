import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { IdentityModule } from './identity/identity.module';

@Module({
  imports: [CoreModule, IdentityModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
