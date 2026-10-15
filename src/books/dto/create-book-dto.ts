import {
  IsString,IsNotEmpty,IsInt,IsBoolean,IsOptional,Min,Max,
} from 'class-validator';

export class CreateBookDto {
  @IsString({ message: 'Judul harus berupa teks' })
  @IsNotEmpty({ message: 'Judul harus diisi' })
  readonly title: string;

  @IsString({ message: 'Penulis harus berupa teks' })
  @IsNotEmpty({ message: 'Penulis harus diisi' })
  readonly author: string;

  @IsString({ message: 'ISBN harus berupa teks' })
  @IsNotEmpty({ message: 'ISBN harus diisi' })
  readonly isbn: string;

  @IsInt({ message: 'Tahun terbit harus berupa angka bulat' })
  @Min(1000, { message: 'Tahun terbit minimal 1000' })
  @Max(new Date().getFullYear(), {
    message: 'Tahun terbit tidak boleh melebihi tahun sekarang',
  })
  readonly publishYear: number;

  @IsBoolean({ message: 'Status ketersediaan harus true atau false' })
  @IsOptional()
  readonly isAvailable: boolean;
}