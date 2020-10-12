import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'pokemons' })
export default class Pokemon {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  Nome: string;

  @Field()
  @Column({name: 'Pokedex_number'})
  PokedexNumber: number;

  @Field()
  @Column()
  Image: string;

  @Field()
  @Column()
  Generation: number;

  @Field()
  @Column({name: 'Evolution_stage'})
  EvolutionStage: number;

  @Field()
  @Column()
  Evolved: number;

  @Field()
  @Column({name: 'Family_id'})
  FamilyId: number;

  @Field()
  @Column({name: 'Cross_gen'})
  CrossGen: number;

  @Field()
  @Column()
  Type1: string;

  @Field()
  @Column()
  Type2: string;

  @Field()
  @Column()
  Weather1: string;

  @Field()
  @Column()
  Weather2: string;

  @Field()
  @Column({name: 'STAT_TOTAL'})
  StatTotal: number;

  @Field()
  @Column({name: 'ATK'})
  Atk: number;

  @Field()
  @Column({name: 'DEF'})
  Def: number;

  @Field()
  @Column({name: 'STA'})
  Sta: number;

  @Field()
  @Column()
  Legendary: number;

  @Field()
  @Column()
  Aquireable: number;

  @Field()
  @Column()
  Spawns: number;

  @Field()
  @Column()
  Regional: number;

  @Field()
  @Column()
  Raidable: number;

  @Field()
  @Column()
  Hatchable: number;

  @Field()
  @Column()
  Skiny: number;

  @Field()
  @Column()
  Nest: number;

  @Field()
  @Column()
  New: number;

  @Field()
  @Column({name: 'Not_gettable'})
  NotGettable: number;

  @Field()
  @Column({name: 'Future_evolve'})
  FutureEvolve: number;

  @Field()
  @Column({name: 'CP_40'})
  Cp40: number;

  @Field()
  @Column({name: 'CP_39'})
  Cp39: number;

  @Field()
  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @Field()
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;

}