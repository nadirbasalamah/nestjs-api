import { PrismaService } from 'src/prisma/prisma.service';
import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import {
  CreatePostDto,
  EditPostDto,
} from './dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  getPosts(userId: number) {
    return this.prisma.post.findMany({
      where: {
        userId,
      },
    });
  }

  getPostById(userId: number, postId: number) {
    return this.prisma.post.findFirst({
      where: {
        id: postId,
        userId,
      },
    });
  }

  async createPost(
    userId: number,
    dto: CreatePostDto,
  ) {
    const post = await this.prisma.post.create({
      data: {
        userId,
        ...dto,
      },
    });

    return post;
  }

  async editPostById(
    userId: number,
    postId: number,
    dto: EditPostDto,
  ) {
    const post = await this.prisma.post.findFirst(
      {
        where: {
          id: postId,
        },
      },
    );

    if (!post || post.userId !== userId) {
      throw new ForbiddenException(
        'access to resource denied',
      );
    }

    return this.prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deletePostById(
    userId: number,
    postId: number,
  ) {
    const post = await this.prisma.post.findFirst(
      {
        where: {
          id: postId,
        },
      },
    );

    if (!post || post.userId !== userId) {
      throw new ForbiddenException(
        'access to resource denied',
      );
    }

    await this.prisma.post.delete({
      where: {
        id: postId,
      },
    });
  }
}
