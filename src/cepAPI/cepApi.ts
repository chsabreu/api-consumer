import { Injectable } from "@nestjs/common";
import { RESTDataSource } from "apollo-datasource-rest";
import { Cep } from "./cep.entity";

@Injectable()
export class CepAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://viacep.com.br';
    }

    async getCep(cep): Promise<Cep> {
        return this.get(`ws/${cep}/json`)
    }
}