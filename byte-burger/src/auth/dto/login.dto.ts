import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'admin@byteburger.com',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: '123',
  })
  @IsNotEmpty()
  password!: string;
}
