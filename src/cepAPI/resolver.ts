import { Injectable } from '@nestjs/common';
import { Resolver, Args, Context, Query } from '@nestjs/graphql';
import { Cep } from './cep.entity';

@Resolver('CEPs')
@Injectable()
export class CepResolver {
    constructor() { }

    @Query(returns => Cep)
    async getCep(
        @Context('dataSources') { cepAPI },
        @Args('cep') cep: string
    ): Promise<any> {
        return await cepAPI.getCep(cep)
    }
}
