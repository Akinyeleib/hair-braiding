import { MiddlewareConsumer, Module, Type } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { StylistsModule } from './stylists/stylists.module';
import { RatingsModule } from './ratings/ratings.module';
import { StylesModule } from './styles/styles.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { MiddlewareConfigProxy } from '@nestjs/common/interfaces';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ClientsModule, StylistsModule, RatingsModule, StylesModule, AppointmentsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements MiddlewareConsumer {
  apply(...middleware: (Function | Type<any>)[]): MiddlewareConfigProxy {
    throw new Error('Method not implemented.');
  }
}
