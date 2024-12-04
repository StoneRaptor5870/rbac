import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'src/prisma/prisma.service'
import { Role } from '@prisma/client'

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } })
    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }

  async register(
    name: string,
    email: string,
    password: string,
    role: string = 'CUSTOMER',
  ) {
    const hashedPassword = await bcrypt.hash(password, 10)
    const enumRole = role.toUpperCase() as Role

    if (!Object.values(Role).includes(enumRole)) {
      throw new Error(`Invalid role: ${role}`)
    }

    return this.prisma.user.create({
      data: { name, email, password: hashedPassword, role: enumRole },
    })
  }
}
