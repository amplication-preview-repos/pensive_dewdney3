/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  Min,
  Max,
  IsDate,
  ValidateNested,
} from "class-validator";

import { Type } from "class-transformer";
import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";
import { AgentAssignmentUpdateManyWithoutPropertiesInput } from "./AgentAssignmentUpdateManyWithoutPropertiesInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class PropertyUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  propertyName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  listingDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => AppointmentUpdateManyWithoutPropertiesInput,
  })
  @ValidateNested()
  @Type(() => AppointmentUpdateManyWithoutPropertiesInput)
  @IsOptional()
  @Field(() => AppointmentUpdateManyWithoutPropertiesInput, {
    nullable: true,
  })
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;

  @ApiProperty({
    required: false,
    type: () => AgentAssignmentUpdateManyWithoutPropertiesInput,
  })
  @ValidateNested()
  @Type(() => AgentAssignmentUpdateManyWithoutPropertiesInput)
  @IsOptional()
  @Field(() => AgentAssignmentUpdateManyWithoutPropertiesInput, {
    nullable: true,
  })
  agentAssignments?: AgentAssignmentUpdateManyWithoutPropertiesInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  images?: InputJsonValue;
}

export { PropertyUpdateInput as PropertyUpdateInput };
