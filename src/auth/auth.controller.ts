import { Controller, Post, Body } from '@nestjs/common'
import { ApiTags, ApiBody } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { RegisterDto } from './register.dto'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiBody({
    description: 'User registration data',
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' },
        role: { type: 'string', enum: ['CUSTOMER', 'ADMIN', 'MANAGER'] },
      },
    },
  })
  async register(
    @Body()
    body: RegisterDto,
  ) {
    return this.authService.register(
      body.name,
      body.email,
      body.password,
      body.role,
    )
  }

  @Post('login')
  @ApiBody({
    description: 'User login data',
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string' },
        password: { type: 'string' },
      },
    },
  })
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password)
    if (!user) {
      throw new Error('Invalid credentials')
    }
    return this.authService.login(user)
  }
}
