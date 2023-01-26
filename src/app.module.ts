import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CepApiService } from './cep-api/cep-api.service';
import { CepApiModule } from './cep-api/cep-api.module';

@Module({
  imports: [CepApiModule],
  controllers: [AppController],
  providers: [AppService, CepApiService],
})
export class AppModule {}
