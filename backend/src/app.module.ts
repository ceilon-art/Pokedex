import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import * as ormOptions from '../ormconfig';
import RepoModule from './repo.module';
import PokemonResolver from './reolvers/user.resolver';
import { GraphQLModule } from '@nestjs/graphql';

const gqlImports = [
  PokemonResolver,
]

@Module({
  imports: [TypeOrmModule.forRoot(ormOptions), RepoModule, ...gqlImports, GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gql',
    playground: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
