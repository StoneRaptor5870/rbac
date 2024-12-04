import { Injectable } from '@nestjs/common'

@Injectable()
export class ResourceService {
  getCustomerResource(): { message: string } {
    return { message: 'Customer resource accessed!' }
  }

  getAdminResource(): { message: string } {
    return { message: 'Admin resource accessed!' }
  }

  getManagerResource(): { message: string } {
    return { message: 'Manager resource accessed!' }
  }

  getPublicResource(): { message: string } {
    return { message: 'Public resource accessed by everyone!' }
  }
}
