import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonModule } from 'src/pokemon/pokemon.module';
=======
import { CommonModule } from './../common/common.module';
import { PokemonModule } from './../pokemon/pokemon.module';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
>>>>>>> fin-seccion-9

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
<<<<<<< HEAD
    PokemonModule
  ]
})
export class SeedModule { }
=======
    PokemonModule,
    CommonModule,
  ]
})
export class SeedModule {}
>>>>>>> fin-seccion-9
