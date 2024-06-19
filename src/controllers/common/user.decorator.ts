import { createParamDecorator, ExecutionContext } from "@nestjs/common"

export const AccountId = createParamDecorator((_, ctx: ExecutionContext): string => {
    const request = ctx.switchToHttp().getRequest()
    const { accountId } = request.user
    return accountId
})