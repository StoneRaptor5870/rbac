import { ApiProperty } from '@nestjs/swagger'

export class RegisterDto {
  @ApiProperty({ description: 'User name' })
  name: string

  @ApiProperty({ description: 'User email address' })
  email: string

  @ApiProperty({ description: 'User password' })
  password: string

  @ApiProperty({
    description: 'User role',
    enum: ['CUSTOMER', 'ADMIN', 'MANAGER'],
  })
  role: 'CUSTOMER' | 'ADMIN' | 'MANAGER'
}
