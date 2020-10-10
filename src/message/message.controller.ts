import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Message } from './message.entity';
import { MessageService } from './message.service';

@Crud({
    model: {
        type: Message
    },
})
@ApiTags('Messages')
@Controller('message')
export class MessageController implements CrudController<Message>{
    constructor(public service: MessageService) {}
}
