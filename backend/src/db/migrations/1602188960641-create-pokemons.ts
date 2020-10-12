import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPokemons1602188960641 implements MigrationInterface {
    private table = new Table({
        name: 'pokemons',
        columns: [
            {
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
            },
            {
                name: 'Nome',
                type: 'varchar',
                length: '255',
                isUnique: true,
                isNullable: false,
            },
            {
                name: 'Pokedex_number',
                type: 'integer',
                isNullable: true,
            },
            {
                name: 'Image',
                type: 'varchar',
                length: '255',
                isNullable: true,
            },
            {
                name: 'Generation',
                type: 'integer',
                isNullable: true,
            },
            {
                name: 'Evolution_stage',
                type: 'integer',
                isNullable: true,
            },
            {
                name: 'Evolved',
                type: 'integer',
                isNullable: true,
            }, 
            {
                name: 'Family_id',
                type: 'integer',
                isNullable: true,
            }, 
            {
                name: 'Cross_gen',
                type: 'integer',
                isNullable: true,
            },
            {
                name: 'Type1',
                type: 'varchar',
                length: '255',
                isNullable: true,
            },
            {
                name: 'Type2',
                type: 'varchar',
                length: '255',
                isNullable: true,
            },
            {
                name: 'Weather1',
                type: 'varchar',
                length: '255',
                isNullable: true,
            },
            {
                name: 'Weather2',
                type: 'varchar',
                length: '255',
                isNullable: true,
            },
            {
                name: 'STAT_TOTAL',
                type: 'integer',
                isNullable: true,
            },
            {
                name: 'ATK',
                type: 'integer',
                isNullable: true,
            },
            {
                name: 'DEF',
                type: 'integer',
                isNullable: true,
            },
            {
                name: 'STA',
                type: 'integer',
                isNullable: true,
            },
            {
                name: 'Legendary',
                type: 'integer',
                isNullable: true,
            },
            {
                name: 'Aquireable',
                type: 'integer',
                isNullable: true,
            },
            {
                name: 'Spawns',
                type: 'integer',
                isNullable: true,
            },
            {
                name: 'Regional',
                type: 'integer',
                isNullable: true,
            },
            {
                name: 'Raidable',
                type: 'integer',
                isNullable: true,
            },
            {
                name: 'Hatchable',
                type: 'integer',
                isNullable: true,
            },
            {
                name: 'Skiny',
                type: 'integer',
                isNullable: true,
            },
            {
                name: 'Nest',
                type: 'integer',
                isNullable: true,
            },
            {
                name: 'New',
                type: 'integer',
                isNullable: true,
            },
            {
                name: 'Not_gettable',
                type: 'integer',
                isNullable: true,
            },
            {
                name: 'Future_evolve',
                type: 'integer',
                isNullable: true,

            },
            {
                name: 'CP_40',
                type: 'integer',
                isNullable: true,
            },
            {
                name: 'CP_39',
                type: 'integer',
                isNullable: true,
            },            
            {
                name: 'created_at',
                type: 'timestamptz',
                isPrimary: false,
                isNullable: false,
                default: 'now()',
            },
            {
                name: 'updated_at',
                type: 'timestamptz',
                isPrimary: false,
                isNullable: false,
                default: 'now()',
            }
        ]
    })

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
    }

}
