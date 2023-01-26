import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { GraphQLModule } from '@nestjs/graphql';
import { CepAPI } from './data/CepAPI';

const dataSources = () => ({
  cepAPI: new CepAPI()
})

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    dataSources: dataSources,
    driver: ApolloDriver,
    autoSchemaFile: true, //gerar schema na memoria
    sortSchema: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
