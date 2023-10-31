import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';

=======
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

>>>>>>> fin-seccion-9

@Injectable()
export class SeedService {

<<<<<<< HEAD

  private readonly axios: AxiosInstance = axios;

  constructor(

    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,

  ) { }

  async executeSeed() {

    await this.pokemonModel.deleteMany({});

    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=20')

    const arrayList = [];
=======
  

  constructor(
    @InjectModel( Pokemon.name )
    private readonly pokemonModel: Model<Pokemon>,

    private readonly http: AxiosAdapter,
  ) {}

  
  async executeSeed() {

    await this.pokemonModel.deleteMany({}); // delete * from pokemons;

    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');

    const pokemonToInsert: { name: string, no: number }[] = [];
>>>>>>> fin-seccion-9

    data.results.forEach(({ name, url }) => {

      const segments = url.split('/');
<<<<<<< HEAD
      const no = +segments[segments.length - 2]
      // const pokemon = await this.pokemonModel.create({ name, no });
      arrayList.push(
        this.pokemonModel.create({ name, no })
      );
    })
    await Promise.all(arrayList);

    return 'Seed executed';
  }


}




=======
      const no = +segments[ segments.length - 2 ];

      // const pokemon = await this.pokemonModel.create({ name, no });
      pokemonToInsert.push({ name, no }); // [{ name: bulbasaur, no: 1 }]

    });

    await this.pokemonModel.insertMany(pokemonToInsert);


    return 'Seed Executed';
  }

}
>>>>>>> fin-seccion-9
