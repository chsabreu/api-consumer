
import { Injectable } from "@nestjs/common";
import { RESTDataSource } from "apollo-datasource-rest";
import { Slip } from "./advice.entity";

@Injectable()

export class AdviceAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = "https://api.adviceslip.com/advice"
    }

    async getAdvice(advice): Promise<Slip> {
        return JSON.parse(await this.get(`${advice}`)).slip
    }
}
