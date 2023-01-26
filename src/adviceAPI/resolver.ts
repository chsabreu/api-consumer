import { Injectable } from '@nestjs/common';
import { Resolver, Args, Context, Query } from '@nestjs/graphql';
import { Slip } from './advice.entity';

@Resolver('ADVICE')
@Injectable()
export class AdviceResolver {
    constructor() {}

    @Query(returns => Slip)
    async getAdvice(
        @Context('dataSources') { adviceAPI },
        @Args('advice') advice: string
    ): Promise<any> {
        return await adviceAPI.getAdvice(advice)
    }

}