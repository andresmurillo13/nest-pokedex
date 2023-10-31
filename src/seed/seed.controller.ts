<<<<<<< HEAD
import { Controller, Get } from '@nestjs/common';
=======
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
>>>>>>> fin-seccion-9
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
<<<<<<< HEAD
  constructor(private readonly seedService: SeedService) { }


  @Get()
  excuteSeed() {
    return this.seedService.executeSeed();
  }


=======

  constructor(private readonly seedService: SeedService) {}

  @Get()
  executeSeed() {
    return this.seedService.executeSeed();
  }

>>>>>>> fin-seccion-9
}
