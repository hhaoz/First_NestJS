import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Profile } from 'src/models/profile.model';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {

  constructor(private profileService: ProfileService){}
    
  @Get()
  getById(@Query('id') id: string) {
    return this.profileService.getById(id);
  }

  @Get('/all')
  getAll(): Profile[] {
    return this.profileService.getAll();
  }

  @Post()
  create(@Body() profile : Profile) {
      return this.profileService.createProfile(profile)
  }

  @Delete("/:id")
  delete(@Param("id") id: string) {
      return this.profileService.deleteProfile(id)
  }
  
  @Put("/:id")
  update(@Param("id") id: string, @Body() profile: Profile) {
      return this.profileService.updateProfile(id, profile)
  }
}
