import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { IdentityModule } from './identity/identity.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [CoreModule, IdentityModule, MessageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
