import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PokemonInput {
  @Field()
  readonly Nome: string;

  @Field({ nullable: true })
  readonly Image: string;

  @Field({ nullable: true })
  readonly PokedexNumber: number;

  @Field({ nullable: true })
  readonly Generation: number;

  @Field({ nullable: true })
  readonly EvolutionStage: number;

  @Field({ nullable: true })
  readonly Evolved: number;

  @Field({ nullable: true })
  readonly FamilyId: number;

  @Field({ nullable: true })
  readonly CrossGen: number;

  @Field({ nullable: true })
  readonly Type1: string;

  @Field({ nullable: true })
  readonly Type2: string;

  @Field({ nullable: true })
  readonly Weather1: string;

  @Field({ nullable: true })
  readonly Weather2: string;

  @Field({ nullable: true })
  readonly StatTotal?: number;

  @Field({ nullable: true })
  readonly Atk: number;

  @Field({ nullable: true })
  readonly Def: number;

  @Field({ nullable: true })
  readonly Sta: number;

  @Field({ nullable: true })
  readonly Legendary: number;

  @Field({ nullable: true })
  readonly Aquireable: number;

  @Field({ nullable: true })
  readonly Spawns: number;

  @Field({ nullable: true })
  readonly Regional: number;

  @Field({ nullable: true })
  readonly Raidable: number;

  @Field({ nullable: true })
  readonly Hatchable: number;

  @Field({ nullable: true })
  readonly Skiny: number;

  @Field({ nullable: true })
  readonly Nest: number;

  @Field({ nullable: true })
  readonly New: number;

  @Field({ nullable: true })
  readonly NotGettable: number;

  @Field({ nullable: true })
  readonly FutureEvolve: number;

  @Field({ nullable: true })
  readonly Cp40: number;

  @Field({ nullable: true })
  readonly Cp39: number;
}

@InputType()
export class DeletePokemonInput {
  @Field()
  readonly id: number;
}
