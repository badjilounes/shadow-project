import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions, getConnectionOptions } from 'typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: async () => {
                const options: ConnectionOptions = await getConnectionOptions();
                return Object.assign(options, {
                    url: process.env.DATABASE_URL,
                });
            }
        }),
    ]
})
export class CoreModule { }
