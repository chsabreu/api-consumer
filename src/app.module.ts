import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { GraphQLModule } from '@nestjs/graphql';
import { CepAPI } from './cepAPI/cepApi';
import { CepResolver } from './cepAPI/resolver';
import { AdviceAPI } from './adviceAPI/adviceApi';
import { AdviceResolver } from './adviceAPI/resolver';

const dataSources = () => ({
  cepAPI: new CepAPI(),
  adviceAPI: new AdviceAPI()
})

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    dataSources: dataSources,
    driver: ApolloDriver,
    autoSchemaFile: true, //gerar schema na memoria
    sortSchema: true
  })],
  controllers: [AppController],
  providers: [AppService, CepAPI, CepResolver, AdviceAPI, AdviceResolver],
})
export class AppModule { }
