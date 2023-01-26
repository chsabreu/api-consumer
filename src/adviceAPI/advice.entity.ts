import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Slip {
    @Field()
    id: number;

    @Field()
    advice: string;
}