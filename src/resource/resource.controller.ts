import { Controller, Get, UseGuards } from '@nestjs/common'
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'
import { Roles } from '../auth/roles.decorator'
import { RolesGuard } from '../auth/roles.guard'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { ResourceService } from './resource.service'

@ApiTags('Resource')
@ApiBearerAuth()
@Controller('resource')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @Get('customer')
  @Roles('CUSTOMER', 'ADMIN')
  getCustomerResource() {
    return this.resourceService.getCustomerResource()
  }

  @Get('manager')
  @Roles('MANAGER', 'ADMIN')
  getManagerResource() {
    return this.resourceService.getManagerResource()
  }

  @Get('admin')
  @Roles('ADMIN')
  getAdminResource() {
    return this.resourceService.getAdminResource()
  }

  @Get('public')
  getPublicResource() {
    return this.resourceService.getPublicResource()
  }
}
