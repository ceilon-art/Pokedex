import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import Pokemon from 'src/db/models/pokemon.entity';
import RepoService from 'src/repo.service';
import { PokemonInput, DeletePokemonInput } from './input/pokemon.input';

@Resolver(() => Pokemon)
export default class PokemonResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [Pokemon])
  public async getPokemons(): Promise<Pokemon[]> {
    return this.repoService.pokemonRepo.find();
  }

  @Query(() => Pokemon, {nullable: true})
  public async getPokemon(@Args('id') id: number): Promise<Pokemon> {
    return  this.repoService.pokemonRepo.findOne(id);
  }

  @Mutation(() => Pokemon)
  public async createPokemon(@Args('data') input: PokemonInput): 
    Promise<Pokemon> {
      const pokemon = this.repoService.pokemonRepo.create({
        Nome: input.Nome,
        PokedexNumber: input.PokedexNumber,
        Image: input.Image,
        Generation: input.Generation,
        EvolutionStage: input.EvolutionStage,
        Evolved: input.Evolved,
        FamilyId: input.FamilyId,
        CrossGen: input.CrossGen,
        Type1: input.Type1,
        Type2: input.Type2,
        Weather1: input.Weather1,
        Weather2: input.Weather2,
        StatTotal: input.StatTotal,
        Atk: input.Atk,
        Def: input.Def,
        Sta: input.Sta,
        Legendary: input.Legendary,
        Aquireable: input.Aquireable,
        Spawns: input.Spawns,
        Regional: input.Regional,
        Raidable: input.Raidable,
        Hatchable: input.Hatchable,
        Skiny: input.Skiny,
        Nest: input.Nest,
        New: input.New,
        NotGettable: input.NotGettable,
        FutureEvolve: input.FutureEvolve,
        Cp40: input.Cp40,
        Cp39: input.Cp39,
      });
      return  this.repoService.pokemonRepo.save(pokemon);
  }

  @Mutation(() => Pokemon, { nullable: true })
  public async deletePokemon(
    @Args('data') input: DeletePokemonInput,
  ): Promise<Pokemon> {
    const pokemon = await this.repoService.pokemonRepo.findOne(input.id);

    if (!pokemon) throw new Error(
      'Pokemon does not exist'
    );

    const copy = { ...pokemon }

    await this.repoService.pokemonRepo.remove(pokemon);

    return copy;
  }
}