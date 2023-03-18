import { Controller, Get } from "@nestjs/common";

@Controller('gpt')
export class GptController {
  @Get('/something')
  getSomething(): string {
    return 'this is gpt get';
  }
}
