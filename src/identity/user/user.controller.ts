import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from "@nestjsx/crud";
import { User } from './user.entity';
import { UserService } from './user.service';

@Crud({
    model: {
        type: User  
    }
})
@ApiTags('Users')
@Controller('user')
@ApiBearerAuth()
@UseGuards(AuthGuard('auth'))
export class UserController implements CrudController<User>{
    constructor(public service: UserService) {}
}
