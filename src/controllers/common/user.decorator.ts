import { createParamDecorator, ExecutionContext } from "@nestjs/common"

export const UserId = createParamDecorator((_, ctx: ExecutionContext): string => {
    const request = ctx.switchToHttp().getRequest()
    const { userId } = request.user
    return userId
})