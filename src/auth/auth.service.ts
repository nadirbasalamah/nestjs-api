import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup() {
    return { msg: 'I Have signed up' };
  }

  signin() {
    return { msg: 'I Have signed in' };
  }
}
